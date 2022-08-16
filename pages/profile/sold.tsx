import type { NextPage } from "next";
import Item from "@components/item";
import Layout from "@components/layout";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack title="판매내역">
      <div>
        <div>
          <div>
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <Item
                key={i}
                title="New Iphone"
                option="black"
                price={95}
                comments={1}
                hearts={2}
                id={i}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sold;
