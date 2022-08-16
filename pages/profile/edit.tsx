import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";

const EditProfile: NextPage = () => {
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

        <Input
          required
          label="Email address"
          name="email"
          kind="text"
          type="email"
        />
        {/* 
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div> */}

        <Input
          label="Phone number"
          type="number"
          name="phone"
          kind="phone"
          required
        />

        <div className="py-6">
          <Button text="Update Profile" large />
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
