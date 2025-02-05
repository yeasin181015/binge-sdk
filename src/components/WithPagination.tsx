import { ElementType, useEffect, useState } from "react";
import RowSkeleton from "./RowSkeleton";
import { RowProps } from "./SliderRowForGenre";

export default function withPagination(
  Component: ElementType,
  props: RowProps
) {
  return function WithPagination() {
    const { category, type, token, tile } = props;
    const [page, setPage] = useState(0);
    const [productList, setProductList] = useState<any[]>([]);
    const [totalProduct, setTotalProduct] = useState<number>(0);

    useEffect(() => {
      const fetchProducts = async () => {
        if (
          !(
            category?.category_type === "ad_category" && category?.ad_type == 1
          ) &&
          category?.category_type !== "tvod"
        ) {
          const ProductRequestbody = {
            category_id: category?.category_id,
            category_type: category?.category_type,
            page: page + 1,
            page_size: category?.page_size ? category?.page_size : -1,
          };
          let ProductRes = await fetch(
            "https://web-api.binge.buzz/api/v3/page/category/products",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "Device-Type": "web",
              },
              body: JSON.stringify(ProductRequestbody),
            }
          ).then((response) => response.json());
          if (
            ProductRes.data &&
            ProductRes.data.products &&
            ProductRes.data.products.length
          ) {
            setProductList(ProductRes.data.products);
            setTotalProduct(ProductRes.data.total);
          }
        }
      };
      fetchProducts();
    }, [page, category, token]);

    if (productList && productList.length > 0) {
      return (
        <Component
          categories={category}
          data={productList}
          totalProduct={totalProduct}
          handleNext={() => setPage((prev: number) => prev + 1)}
          type={type}
          visibleOverflow={props.visibleOverflow}
          tile={tile}
        />
      );
    } else {
      return <RowSkeleton />;
    }
  };
}
