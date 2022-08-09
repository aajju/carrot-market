import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="flex-col px-4 py-10 space-y-4">
      <div>
        <div>
          <label className="w-full cursor-pointer h-56 flex justify-center items-center border border-gray-500 border-dashed rounded-md text-gray-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
      </div>

      <div className="flex-col">
        <label htmlFor="price">Price</label>
        <div className="relative flex items-center ">
          <div className="absolute left-0 pl-2">
            <span>$</span>
          </div>
          <input
            id="price"
            className="w-full pl-5"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-2">
            <span>USD</span>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <label>Description</label>
        <div>
          <textarea className="w-full" rows={4} />
        </div>
      </div>
      <button className="bg-orange-500 text-white w-full py-1 mt-3 rounded-lg focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
