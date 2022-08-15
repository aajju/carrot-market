import type { NextPage } from "next";
import Layout from "../../components/layout";

const Community: NextPage = () => {
  return (
    <Layout title="동네생활" hasTabBar>
      <div className="px-4 py-10">
        <div className="border-b-2 flex-col space-y-2 ">
          <span className="px-2 py-1 text-xs rounded-full bg-slate-200">
            동네질문
          </span>
          <span className="block">
            <span className="text-orange-500">Q.</span> What is the best mandu
            restaurant?
          </span>
          <div className="flex pb-2 border-b-[1px] justify-between items-center text-sm text-gray-500">
            <span>니꼬</span>
            <span>18시간 전</span>
          </div>
          <div className="flex space-x-4 pb-3">
            <span className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex items-center space-x-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 1</span>
            </span>
          </div>
        </div>

        <button className="fixed right-5 bottom-10 bg-orange-500 rounded-full p-3 ">
          <svg
            className="w-6 h-6  text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Community;
