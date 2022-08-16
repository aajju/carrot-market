import type { NextPage } from "next";
import Layout from "@components/layout";
import Message from "@components/message";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-10 flex-col space-y-3">
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />{" "}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />{" "}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />{" "}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />{" "}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />{" "}
        <Message message="Hi how much are you selling them for?" />
        <Message message="I want ￦20,000" reversed />
        <Message message="미쳤어" />
        <div className="fixed bottom-0 px-4 py-2 inset-x-0 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <input className="bg-white rounded-2xl w-full " type="text" />
            <div className="absolute right-2">
              <span className="bg-orange-500 text-white rounded-full px-3 py-1">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
