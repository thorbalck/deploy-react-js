import { Row, Col } from "react-bootstrap";
import ItemComponent from "../ItemComponent";
import { useContext } from "react";
import { Context } from "../../assets/utils/AppContext";
function PhukienComponent() {
     const { Dataproduct } = useContext(Context);
    return (
        <>
            <div className="card1">
                <h2>PHỤ KIỆN</h2>
                <Row md lg={4}>
                    {Dataproduct.map((value) =>
                        value.product.map(
                            (value, key) =>
                                value.type == "phu kien full" && (
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

export default PhukienComponent;
