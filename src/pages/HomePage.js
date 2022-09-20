import { Button } from "react-bootstrap";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page-container">
      <h1>HomePage</h1>
      <Link to="/quiz">
        <ButtonComponent label="Start" />
      </Link>
    </div>
  );
};
export default HomePage;
