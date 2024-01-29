import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItem from "../data/items.json";

interface Props {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const item = storeItem.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity >= 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          ${item.price}
        </div>
      </div>
      <div className="d-flex flex-column">
        <Button
          variant="outline-primary"
          size="sm"
          className="mb-1 py-1"
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </Button>
      </div>
      <div>${item.price * quantity}</div>
      <Button
        className=" btn-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        x
      </Button>
    </Stack>
  );
};

export default CartItem;
