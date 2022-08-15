import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 py-4">
        <div>
          <div className="h-96 bg-slate-300" />
          <div className="flex mt-3 space-x-3 items-center mb-5">
            <div className="w-12 h-12 bg-slate-400 rounded-full" />
            <div className="flex-col space-y-1 justify-center ">
              <p className="text-gray-800 text-sm font-semibold">Steve Jebs</p>
              <p className="text-xs text-gray-700">View profile &rarr;</p>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-3xl font-bold mb-2">Galaxy S50</h1>
            <p className="text-3xl mb-3">$140</p>
            <p>
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex w-full justify-between items-center mt-5 mb-7 ">
              <Button text="Talk to seller" />
              <button className="w-2/12 py-3 mx-auto ">
                <svg
                  className="h-6 w-6 mx-auto "
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <h2 className="font-bold text-xl mb-2">Similar items</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div className="flex-col" key={i}>
                <div className="w-full h-56 bg-slate-300 mb-2" />
                <h3 className="text-gray-800">Galaxy S60</h3>
                <p className="font-bold mb-4 ">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
