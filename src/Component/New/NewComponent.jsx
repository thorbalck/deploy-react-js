import { Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../assets/utils/AppContext";
import ItemComponent from "../ItemComponent";
function NewComponent() {
    const { Dataproduct } = useContext(Context);
    return (
        <>
            <div className="bigcard">
                <div className="banner2">
                    <img src="img/77.jpg" />
                </div>
            </div>
            <div className="card1 mt-3">
                <Row md={2} lg={4}>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "new" && (
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

export default NewComponent;
