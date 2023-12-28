import PropTypes from "prop-types";
import "../../public/style.css";
import DetailProduct from "./DetailProduct";
import { useState } from "react";
ItemComponent.propTypes = {
    value: PropTypes.object,
};

function ItemComponent({ value }) {
    const [show,setshow] = useState(false)
    const formatCurrency = (amount) => {
        const formatamount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formatamount;
    };

    return (
        <>
            <div className="product">
                <div className="image-product">
                    <img src={value.img} onClick={() => setshow(true)} />
                </div>
                <h3>{value.name}</h3>
                <p>Giá: {formatCurrency(Number(value.price))}</p>
            </div>
            <DetailProduct show={show} setShow={setshow} value={value} />
        </>
    );
}

export default ItemComponent;
