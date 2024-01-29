import { Card } from "react-bootstrap";

const About = () => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="../public/imgs/farmer.jpg"
        height="500px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            "We provide only organic fruits, and the best kind of them from the
            globes."{" "}
          </p>
          <footer className="blockquote-footer">
            Mr. Jason Smith, Founder of {""}
            <cite>Happy Fruit Store</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default About;
