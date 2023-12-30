import { Modal, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../public/DetailProduct.css";
import { useContext, useState } from "react";
import { Context } from "../assets/utils/AppContext";

DetailProduct.propTypes = {
    show: PropTypes.bool,
    setShow: PropTypes.func,
    value: PropTypes.object,
};

function DetailProduct({ show, setShow, value }) {
    const { history, sethistory } = useContext(Context);

    const formatCurrency = (amount) => {
        const formatamount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formatamount;
    };
    //  const handleAddCard = (value) => {
    //    const isProductExist = history.some((item) => item.id === value.id);
    //    console.log(isProductExist);
    // if (!isProductExist) {
    //     sethistory((current) => [...current, value]);
    //     setShow(false)
    //     };
    // }
    // const [size,setsize]=useState("")
    const [selectedSize, setSelectedSize] = useState("");
    const handleAddCard = (value) => {
        const isProductExist = history.some((item) => item.id === value.id && item.size === selectedSize);
        if (!isProductExist) {
            if (selectedSize) {
                //Sử dụng selectedSize khi thêm sản phẩm vào giỏ hàng
                sethistory((current) => [...current, { ...value, size: selectedSize }]);
                setShow(false);
            } else {
                alert("Vui long chon size!");
            }
        } else {
            if (history.some((item) => item.size === selectedSize)) {
                const updatedHistory = history.map((item) => (item.id === value.id && item.size === selectedSize ? { ...item, quaryty: item.quaryty + 1 } : item));
                sethistory(updatedHistory);
                setShow(false);
            }
        }
    };

    const handleOnclick = (size) => {
        setSelectedSize(size);
    };

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} className="modal_login_form" size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Chi tiết sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Id-product d-flex">
                        <div className="card2 w-50">
                            <img src={value.img} alt="" />
                            <h1 className="text-center">{value.name}</h1>
                            <h2 className="text-center">{formatCurrency(Number(value.price))}</h2>
                        </div>
                        <div className="productdetails w-50">
                            <h1>Mô tả sản phẩm</h1>
                            <p>NƠI SX:{value.export}</p>
                            <p>CHẤT LIỆU:{value.material}</p>
                            <p>TÍNH NĂNG:{value.feature}</p>
                            <p>NỔI BẬT:{value.intro}</p>
                            <div className="size">
                                <Form>
                                    {value.size.map((value, key) => (
                                        <Form.Check inline label={value.size} name="group1" type="radio" onClick={() => handleOnclick(value)} key={key} />
                                    ))}
                                </Form>
                                <div className="size-chart">
                                    <img src="img/Screenshot 2023-12-27 180605.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleAddCard(value)}>
                        THÊM VÀO GIỎ HÀNG
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DetailProduct;
