import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { Post } from ".prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface WriteForm {
  question: string;
}

interface WriteMutationResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { loading, data }] =
    useMutation<WriteMutationResponse>("/api/posts");

  const onSubmitClick = (formData: WriteForm) => {
    if (loading) return;
    console.log(formData);
    post(formData);
  };

  useEffect(() => {
    if (data?.ok) {
      router.replace(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="동네생활 글쓰기">
      <form onSubmit={handleSubmit(onSubmitClick)} className="px-4 py-4">
        <TextArea
          register={register("question", { required: true, minLength: 5 })}
          label="재미있는 동네 얘기를 나누세요!"
          name="write"
          placeholder="Ask a question!"
          required
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
