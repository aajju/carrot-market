import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name: string;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();

  const [editProfile, { loading, data }] =
    useMutation<EditProfileResponse>("/api/users/me");

  const router = useRouter();
  const onValid = ({ name, email, phone }: EditProfileForm) => {
    // console.log(editFormData);
    if (loading) return;
    if (name === "" || (email === "" && phone === "")) {
      setError("formErrors", { message: "error!!!" });
    }
    editProfile({ name, email, phone });
  };

  useEffect(() => {
    // if (!user) router.replace("/");
    if (user?.name) setValue("name", user.name);
    if (user?.email) {
      setValue("email", user.email);
    }
    if (user?.phone) setValue("phone", user.phone);
  }, [user, setValue]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
    if (data?.ok) {
      router.replace("/profile");
    }
  }, [data, setError, router]);

  return (
    <Layout canGoBack title="프로필 수정">
      <div className="py-10 px-4 space-y-4 ">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            register={register("name")}
            label="Name"
            name="name"
            kind="text"
            type="text"
            required
          />

          <Input
            register={register("email")}
            label="Email address"
            name="email"
            kind="text"
            type="email"
            required={false}
          />

          <Input
            register={register("phone")}
            label="Phone number"
            type="number"
            name="phone"
            kind="phone"
            required={false}
          />
          {errors.formErrors ? errors.formErrors.message : null}

          <div className="py-6">
            <Button text="Update Profile" large />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditProfile;
