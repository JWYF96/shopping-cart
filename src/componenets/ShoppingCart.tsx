import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import storeItem from "../data/items.json";

interface Props {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: Props) => {
  const { closeCart, cartItems } = useShoppingCart();
  const freeDeliveryAmount = 50;
  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = storeItem.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">Total ${totalAmount}</div>
          {totalAmount < 50 ? (
            <div>
              <p className="text-danger text-center fw-bold">
                We offer free delivery at $50!
              </p>
              <p className="text-danger text-center fw-bold">
                Its ${freeDeliveryAmount - totalAmount} to go!
              </p>
            </div>
          ) : (
            <p className="text-success text-center fw-bold">Free delievery!</p>
          )}
          <Button>Check Out</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
