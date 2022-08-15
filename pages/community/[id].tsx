import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div className="pt-2">
      <span className="ml-4 px-2 py-1 text-xs rounded-full bg-slate-200">
        동네질문
      </span>
      <div className="px-4 border-b-[1px] pb-2 flex mt-3 space-x-3 items-center">
        <div className="w-12 h-12 bg-slate-400 rounded-full" />
        <div className="flex-col space-y-1 justify-center ">
          <p className="text-gray-800 text-sm font-semibold">Steve Jebs</p>
          <p className="text-xs text-gray-700">View profile &rarr;</p>
        </div>
      </div>
      <div className="pt-2">
        <span className="block border-b-[1px] pb-2 px-4">
          <span className="text-orange-500">Q.</span> What is the best mandu
          restaurant?
        </span>
        <div className="flex space-x-4 pb-3 px-4 border-b-2 pt-2">
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

      <div className="px-4 py-6">
        <div className="flex items-start space-x-2">
          <div className="w-10 h-10 bg-slate-300 rounded-full" />
          <div className="flex-col">
            <span className="block font-bold text-gray-900">Steve Jebs</span>
            <span className="block text-gray-600 text-sm">2시간 전</span>
            <p>The best mandu restaurant is the one next to my house.</p>
          </div>
        </div>
      </div>

      <div className="px-4 flex-col">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          rows={4}
          placeholder="Answer this question!"
        />
        <button className="bg-orange-500 text-white w-full py-1 mt-3 rounded-lg focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;