import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Product, User } from ".prisma/client";

interface ProductWithUser extends Product {
  user: User;
}

interface ProductResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
}

const ItemDetail: NextPage = () => {
  const router = useRouter();

  const { data, error } = useSWR<ProductResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );

  return (
    <Layout canGoBack>
      <div className="px-4 py-4">
        <div>
          <div className="h-96 bg-slate-300" />
          <div className="flex mt-3 space-x-3 items-center mb-5">
            <div className="w-12 h-12 bg-slate-400 rounded-full" />
            <div className="flex-col space-y-1 justify-center ">
              <p className="text-gray-800 text-sm font-semibold">
                {data?.product?.user.name}
              </p>
              <p className="text-xs text-gray-700">View profile &rarr;</p>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-3xl font-bold mb-2">{data?.product.name}</h1>
            <p className="text-3xl mb-3">${data?.product.price}</p>
            <p>{data?.product.description}</p>
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
            {data?.relatedProducts.map((product) => (
              <div className="flex-col" key={product.id}>
                <div className="w-full h-56 bg-slate-300 mb-2" />
                <h3 className="text-gray-800">{product.name}</h3>
                <p className="font-bold mb-4 ">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
