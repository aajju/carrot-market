import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { Stream } from ".prisma/client";
import { useEffect } from "react";

interface WriteForm {
  name: string;
  price: string;
  description: string;
}

interface WriteMutationResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [stream, { loading, data }] =
    useMutation<WriteMutationResponse>("/api/streams");

  const onValid = (formData: WriteForm) => {
    if (loading) return;
    console.log(formData);
    stream(formData);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Live 쇼핑 만들기">
      <form onSubmit={handleSubmit(onValid)} className=" space-y-5 py-10 px-4">
        <Input
          register={register("name", { required: true })}
          required
          label="Name"
          type="text"
          name="name"
          kind="text"
        />

        <Input
          register={register("price", { required: true, valueAsNumber: true })}
          required
          label="Price"
          // placeholder="0.00"
          type="number"
          name="price"
          kind="price"
        />
        <TextArea
          register={register("description", { required: true, minLength: 5 })}
          label="Description"
          name="description"
        />

        <Button text="Go live" large />
      </form>
    </Layout>
  );
};

export default Create;
