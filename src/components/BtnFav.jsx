import { Badge, Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BtnFav = () => {
  const favourites = useSelector(state => state.favourites.content.length);
  return (
    <Navbar bg="light">
      <Container>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/favourites">
          Favourites{" "}
          <span>
            {" "}
            <Badge bg="dark">{favourites}</Badge>{" "}
          </span>
        </Link>
      </Container>
    </Navbar>
  );
};

export default BtnFav;
