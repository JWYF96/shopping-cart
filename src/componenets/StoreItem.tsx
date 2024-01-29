import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

const StoreItem = ({ id, name, price, imgUrl, description }: Props) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-3">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <Card.Subtitle className="mb-4">{description}</Card.Subtitle>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="py-1"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity} </span>in cart
                </div>
                <Button
                  className="py-1"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button className="btn-danger" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
