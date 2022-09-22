import { Button } from "react-bootstrap";

const ButtonComponent = ({ label, handleOnClick }) => {
  return (
    <Button
      onClick={handleOnClick}
      variant="primary"
      size="lg"
      style={{ backgroundColor: "green" }}
    >
      {label}
    </Button>
  );
};
export default ButtonComponent;
