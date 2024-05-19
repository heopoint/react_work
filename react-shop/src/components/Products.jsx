import React from "react";
import { Col } from "react-bootstrap";
export default function Products({ item }) {
  return (
    <Col>
         <img src={`https://heopoint.github.io/react_work/react-shop/src/assets/shoes${item.id}.jpg`} alt={item.title} />
      <h4>{item.title}</h4>
     <h4>{item.content}</h4>
      <p>{item.price}</p>
    </Col>
  );
}