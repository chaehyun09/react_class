import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Main({products}) {
  // props는 객체로 받아오니까 구조분해할당으로
  // props = {
  //   products:  {
  //     id: nanoid(),
  //     name: "멋진 바지",
  //     price: 20000,
  //     options: [28, 30, 32],
  //     likes: 100,
  //   },
  //   {
  //     id: nanoid(),
  //     name: "멋진 셔츠",
  //     price: 10000,
  //     options: ["small", "medium", "large"],
  //     likes: 200,
  //   },
  //   {
  //     id: nanoid(),
  //     name: "멋진 신발",
  //     price: 30000,
  //     options: [230, 240, 250, 260, 270],
  //     likes: 300,
  //   }
  // }
  const navigate = useNavigate();

  return (
    <>
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
          onClick={() => {
            alert("진짜 이동할거야?")
            navigate("/products")
          }}
          >🔥 여름 추천템 🔥</h2>
          <Link to="/products">더보기</Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((product) => {
              return(
                <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
              }}
            >
              {product.name}
            </div>
              )
            })
            }
          </div>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}