import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import TextArea from "@components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="동네생활 글쓰기">
      <form className="px-4 py-4">
        <TextArea
          label="재미있는 동네 얘기를 나누세요!"
          name="write"
          placeholder="Ask a question!"
        />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default Write;
