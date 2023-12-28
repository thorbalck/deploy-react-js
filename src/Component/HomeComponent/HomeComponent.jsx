import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ItemComponent from "../ItemComponent";
import { useContext } from "react";
import { Context } from "../../assets/utils/AppContext";
function HomeComponent() {
    const {Dataproduct} = useContext(Context)
    return (
        <>
            <Carousel data-bs-theme="dark" indicators={false} controls={false}>
                <Carousel.Item>
                    <img className="d-block w-100" src="img/Banner_Cool_Touch_(1500x600)_fix_03.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="img/Banner_Chris_(1500x700)_02.jpg" alt="Second slide" />
                </Carousel.Item>
            </Carousel>
            <div className="logo">
                <img src="img/th.jpg" />
            </div>
            <div className="card">
                <h2>ÁO NAM</h2>
                <Row>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "ao nam" && (
                                    <Col sm={6} md={4} lg={3} key={key}>
                                        <ItemComponent value={value} />
                                    </Col>
                                )
                        )
                    )}
                </Row>
            </div>

            <div className="card">
                <h2>QUẦN NAM</h2>
                <Row>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "quan nam" && (
                                    <Col sm={6} md={4} lg={3} key={key}>
                                        <ItemComponent value={value} />
                                    </Col>
                                )
                        )
                    )}
                </Row>
            </div>

            <div className="card">
                <h2>PHỤ KIỆN</h2>
                <Row>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "phu kien1" && (
                                    <Col sm={6} md={4} lg={3} key={key}>
                                        <ItemComponent value={value} />
                                    </Col>
                                )
                        )
                    )}
                </Row>
            </div>
        </>
    );
}

export default HomeComponent;
