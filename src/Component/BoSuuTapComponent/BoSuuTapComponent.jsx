import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../assets/utils/AppContext";
import ItemComponent from "../ItemComponent";
function BoSuuTapComponent() {
    const { Dataproduct } = useContext(Context);
    return (
        <>
            <div className="banner">
                <div className="banner1">
                    <img src="img/miengiocat-1500x600.jpg" />
                </div>
            </div>
            <div className="card1">
                <Row md={2} lg={4}>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "bo sieu tap" && (
                                    <Col sm={6} md={4} lg={3} key={key}>
                                        <ItemComponent value={value} />
                                    </Col>
                                )
                        )
                    )}
                </Row>
            </div>
            <div className="banner">
                <div className="banner1">
                    <img src="img/banner2.jpg" />
                </div>
            </div>
            <Row md={2} lg={4}>
                {Dataproduct.map((value) =>
                    value.product.map(
                        (value, key) =>
                            value.type == "bo sieu tap2" && (
                                <Col sm={6} md={4} lg={3} key={key}>
                                    <ItemComponent value={value} />
                                </Col>
                            )
                    )
                )}
            </Row>
        </>
    );
}

export default BoSuuTapComponent;
