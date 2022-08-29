import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/prouct-list";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack title="판매내역">
      <div>
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
