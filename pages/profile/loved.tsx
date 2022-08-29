import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";
import ProductList from "@components/prouct-list";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack title="관심목록">
      <div>
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Loved;
