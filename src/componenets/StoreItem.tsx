import { Card } from "react-bootstrap";

interface Props {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

const StoreItem = ({ id, name, price, imgUrl, description }: Props) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
};

export default StoreItem;
