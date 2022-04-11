import CategoryById from "../../components/Products/GetProductsById";
import BreadCrumbs from "../../components/Breadcumb/Breadcumb";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navigation/Navigation";
import "./Products.css";

const Snacks = () => {
  return (
    <>
      <Header />
      <Navigation />
      <BreadCrumbs name="Snacks" />
      <Container fluid="sm">
        <Row xs={2} md={4} lg={6}>
          <Col>
            <CategoryById categoryid={4} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Snacks;
