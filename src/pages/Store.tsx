import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import StoreItem from "../componenets/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className="mb-5 fw-bold">Welcome to Happy Fruit Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
