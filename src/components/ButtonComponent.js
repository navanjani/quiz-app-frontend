import { Button } from "react-bootstrap";

const ButtonComponent = ({ label }) => {
  return (
    <Button variant="primary" size="lg" style={{ backgroundColor: "green" }}>
      {label}
    </Button>
  );
};
export default ButtonComponent;
