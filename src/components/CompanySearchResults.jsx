import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyAction } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.company.content);

  useEffect(() => {
    dispatch(getCompanyAction(params));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
