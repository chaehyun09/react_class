import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Product({products}) {
  const {id} = useParams();
  console.log(id)

  // products id를 nanoid로 주면 이게 왜 안됨...??
  // 콘솔 찍어봐도 똑같고 typeof 찍어봐도 둘 다 string인데 === 하면 false 나옴
  // nanoid는 새로고침할 때마다 새롭게 만들어짐?
  // const product = products.find((p) => p.id === id)
  // console.log(products[0].id)
  // console.log(id)

// url parameter 에서 가져온 id는 string type 이므로 숫자로 바꿔주기
  const product = products.find((p) => p.id === Number(id))
  console.log(product)

  const [selectedOption, setSelectedOption] = useState("");

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {product.name}
          </div>
          <div>
            <h3>가격: {product.price}원</h3>
            <h3>좋아요: {product.likes}개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(e) => {
                setSelectedOption(e.target.value)
              }}
            >
              <option value="">선택하세요</option>
              {product.options.map((op) => {
                return(
              <option>{op}</option>
                )
              })}
            </select>
            <div>{selectedOption}</div>
          </div>
        </div>
      </div>
    </>
  );
}