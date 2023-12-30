import { useContext, useEffect, useState } from "react";
import { Context } from "../assets/utils/AppContext";
import { Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../public/CartComponent.css";
import axios from "axios";

CartComponent.propTypes = {
    showcart: PropTypes.bool,
    setshowcart: PropTypes.func,
};

function CartComponent({ showcart, setshowcart }) {
    const { history, sethistory, cartuser, setcartuser } = useContext(Context);

    const [totalPrice, setTotalPrice] = useState(0);
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [PickupAddress, setPickupAddress] = useState("shipToHome");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Đưa dữ liệu đến server hoặc xử lý dữ liệu theo ý của bạn
        console.log("Data submitted:", { customerName, phone, PickupAddress, note });
        handleClose(); // Đóng modal sau khi xử lý
    };
    // const [showPayComponent, setShowPayComponent] = useState(false);
    //  const [showPayModal, setShowPayModal] = useState(false);

    // Cập nhật tổng số lượng và tổng giá khi giỏ hàng thay đổi
    useEffect(() => {
        const newTotalPrice = history.reduce((total, item) => total + item.price * item.quaryty, 0);
        setTotalPrice(newTotalPrice);
    }, [history]);

    const handleRemoveFromCart = (product) => {
        const newcart = history.filter((item) => (item.id === product.id && item.size.size !== product.size.size) || item.id !== product.id);
        sethistory(newcart);
    };

    const formatCurrency = (amount) => {
        const formatamount = amount.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
        });
        return formatamount;
    };

    const handleUpdateQuantity = (type, product) => {
        const cart = [...history];
        const index = cart.findIndex((item) => item.id === product.id && item.size.size === product.size.size);
        if (type === "minus") {
            if (cart[index].quaryty > 1) {
                cart[index].quaryty -= 1;
            }
        } else {
            cart[index].quaryty += 1;
        }

        sethistory(cart);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const customerInfo = {
            name: customerName,
            phone: phone,
            address: PickupAddress,
            note: note,
            totalPrice: formatCurrency(Number(totalPrice)),
        };
        const selectedProducts = history.map((item) => ({
            id: item.id,
            title: item.name,
            quaryty: item.quaryty,
            img: item.img,
            size: item.size.size,
            price: formatCurrency(Number(item.price)),
        }));
        setcartuser((current) => [
            ...current,
            {
                ...customerInfo,
                selectedProducts,
            },
        ]);
        console.log(customerInfo);
        const dataToSend = {
            customerInfo,
            selectedProducts,
        };
        console.log(dataToSend);
        await axios.post("https://6561f5c7dcd355c083246707.mockapi.io/api/Customer", dataToSend);
        document.querySelector("#name").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#address").value = "";
        document.querySelector("#note").value = "";
        setcartuser([]);
        sethistory([]);
    };
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    setShowSuccessModal(true);
    };
    const handleCloseSuccessModal = () => {
        setShowSuccessModa;
        setShowSuccessModal(false);
    
        return (
            <>
                <div show={showcart} onHide={() => setshowcart(false)} size="xl" className="custom-modal">
                    <div closeButton>
                        <h1 style={{ fontSize: "45px", textAlign: "center" }}>THÔNG TIN GIỎ HÀNG</h1>
                    </div>
                    {history.length > 0 ? (
                        <div className="cartpaymenth">
                            <Row className="cart-like" style={{ display: "flex", width: "100%" }}>
                                <Col>
                                    <div className="cartthanhtoan" style={{ width: "100%" }}>
                                        {history.map((value, key) => (
                                            <div className="box-cart" key={key}>
                                                <div className="image-cart">
                                                    <i className="fa-solid fa-trash" onClick={() => handleRemoveFromCart(value)} style={{ fontSize: "20px" }}>
                                                        XÓA
                                                    </i>
                                                    <img src={value.img} alt="" className="img_cart" />
                                                </div>

                                                <div className="hot1">
                                                    <p>{value.name}</p>
                                                    <div className="iconcart">
                                                        <i className="fa-solid fa-plus" onClick={() => handleUpdateQuantity("plus", value)}></i> <p>số lượng:{value.quaryty} </p>
                                                        <i className="fa-solid fa-minus" onClick={() => handleUpdateQuantity("minus", value)}></i>
                                                    </div>
                                                    <p style={{ fontSize: "30px" }}>Siá tiền:{formatCurrency(Number(value.price))}</p>
                                                    <p style={{ fontSize: "30px" }}>Size: {value.size.size}</p>
                                                    <p style={{ fontSize: "30px" }}>Tổng ={formatCurrency(Number(value.price * value.quaryty))}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 style={{ marginLeft: "250px", fontSize: "35px", color: "red" }} className="sum">
                                        Tổng giá trị đơn hàng:{formatCurrency(totalPrice)}
                                    </h3>
                                </Col>
                                <Col className="cartproduc" style={{ fontSize: "30px" }}>
                                    <div className="form-group">
                                        <label htmlFor="txtCustomerName">Tên</label>
                                        <input type="text" className="required form-control" id="name" placeholder="Tên người nhận" onChange={(e) => setCustomerName(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="txtCustomerPhone">Số điên thoại</label>
                                        <input type="text" className="required form-control" id="phone" placeholder="Vui Lon" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtCustomerPickupAddress"> Nhận hàng tại nhà/công ty/bưu điện</label>
                                        <input type="text" className="required form-control" id="address" placeholder="Địa chỉ nhận hàng" onChange={(e) => setPickupAddress(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtCustomerNote"> Ghi chú</label>
                                        <input
                                            type="text"
                                            className="required form-control"
                                            id="note"
                                            name="txtCustomerName"
                                            placeholder=""
                                            value={note}
                                            onChange={(e) => setNote(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="total">
                                        <Button style={{ width: "100%" }} variant="primary" onClick={onSubmit}>
                                            ĐẶT HÀNG
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <div>
                            <p style={{ fontSize: "30px", textAlign: "center" }}>Bạn chưa có sản phẩm trong giỏ hàng</p>,
                            <img style={{ width: "30%", display: "block", margin: "auto" }} src="img/download (1).png" alt="gio hang rong" />
                        </div>
                    )}
                </div>
                <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Đơn hàng đã đặt thành công!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Additional success message or details */}
                        <p>Cảm ơn bạn đã đặt hàng.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseSuccessModal}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };

export default CartComponent;
