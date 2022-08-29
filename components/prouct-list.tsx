import Item from "@components/item";
import { ProductWithFavCount } from "pages";
import useSWR from "swr";

interface ProductListProps {
  kind: "favs" | "sales" | "purchases";
}

interface Record {
  id: number;
  product: ProductWithFavCount;
}

interface ProductListResponse {
  [key: string]: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(`/api/users/me/${kind}`);

  return data ? (
    <div>
      {data[kind].map((record) => (
        <Item
          key={record.id}
          title={record.product.name}
          option="black"
          price={record.product.price}
          comments={1}
          hearts={record.product._count.favs}
          id={record.product.id}
        />
      ))}
    </div>
  ) : null;
}
