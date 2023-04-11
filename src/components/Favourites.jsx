import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import Company from "./Company";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.content);
  const navigate = useNavigate();
  return (
    <>
      {favourites.length > 0 ? (
        <Container>
          <Row>
            <Col>
              {favourites.map((company, index) => (
                <Company key={index} company={company} index={index} />
              ))}
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Alert variant="warning">Ancora nessuna azienda aggiunta ai preferiti.</Alert>
            <Button
              variant="primary"
              onClick={() => {
                navigate("/");
              }}
            >
              Torna alla Home
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Favourites;
