import type { NextPage } from "next";
import FloatingButton from "../components/floating-btn";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="home" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            title="New Iphone"
            option="black"
            price={95}
            comments={1}
            hearts={2}
            id={i}
          />
          // <div
          //   className="flex px-4 pt-5 cursor-pointer justify-between"
          //   key={i}
          // >
          //   <div className="flex items-center space-x-2">
          //     <div className="h-16 w-16 bg-gray-400" />
          //     <div className="flex-col">
          //       <h3 className=" font-semibold">New iPhone 14</h3>
          //       <span className="flex text-gray-500 text-sm">Black</span>
          //       <span className="flex font-bold">$95</span>
          //     </div>
          //   </div>
          //   <div className="flex justify-between items-center space-x-2">
          //     <div className="flex justify-between items-center space-x-1">
          //       <svg
          //         className="w-4 h-4"
          //         fill="none"
          //         stroke="currentColor"
          //         viewBox="0 0 24 24"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          //         ></path>
          //       </svg>
          //       <span>1</span>
          //     </div>
          //     <div className="flex justify-between items-center space-x-1">
          //       <svg
          //         className="w-4 h-4"
          //         fill="none"
          //         stroke="currentColor"
          //         viewBox="0 0 24 24"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <path
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          //         ></path>
          //       </svg>
          //       <span>1</span>
          //     </div>
          //   </div>
          // </div>
        ))}

        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
