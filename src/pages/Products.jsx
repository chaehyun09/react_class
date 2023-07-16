import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Products({products}) {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  
  
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
        onClick={() => {
          setSearchParams({
            sort: "price"
          })
        }}
        >
          가격순으로 정렬해랏
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
        {
          products.map((product) => {
            return(
              <Link to={`/products/${product.id}`}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                {product.name}
              </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    </>
  );
}