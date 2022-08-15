import type { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Live 쇼핑 만들기">
      <div className=" space-y-5 py-10 px-4">
        <Input required label="Name" type="text" name="name" kind="text" />

        <Input
          required
          label="Price"
          placeholder="0.00"
          type="number"
          name="price"
          kind="price"
        />
        <TextArea label="Description" name="description" />

        <Button text="Go live" large />
      </div>
    </Layout>
  );
};

export default Create;
