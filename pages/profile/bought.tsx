import type { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <div>
      <div>
        <div>
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              className="flex justify-between px-4 py-5 border border-b-1 items-baseline"
              key={i}
            >
              <div className="flex items-center space-x-2">
                <div className="h-16 w-16 bg-gray-400" />
                <div className="flex-col">
                  <h3 className=" font-semibold">New iPhone 14</h3>
                  <span className="flex text-gray-500 text-sm">Black</span>
                  <span className="flex font-bold">$95</span>
                </div>
              </div>
              <div className="flex justify-between items-center space-x-2">
                <div className="flex justify-between items-center space-x-1">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span>1</span>
                </div>
                <div className="flex justify-between items-center space-x-1">
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
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bought;
