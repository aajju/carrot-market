import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/prouct-list";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack title="구매내역">
      <div>
        <ProductList kind="purchases" />
      </div>
    </Layout>
  );
};

export default Bought;
