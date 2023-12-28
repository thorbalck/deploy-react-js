import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../public/style.css";
import { InputGroup, Form, Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
// import AppContext, { Context } from "../assets/utils/AppContext";
import CartComponent from "./CartComponent";
import { useContext, useEffect, useRef, useState } from "react";
import SearchComponent from "./SearchComponent";
import { Context } from "../assets/utils/AppContext";
function BaseComponent() {
    const [searchproduct, setsearchproduct] = useState("");
    const [showcart, setshowcart] = useState(false);
    const [searchass, setseachss] = useState([]);
    const cardSearchRef = useRef(null);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [showbar, setshowbar] = useState(false);
    const{number} = useContext(Context)
    const ChangeCart =useNavigate()
    const handlecart = () => {
        ChangeCart("/deploy-react-js/cart");
    };
    
    const { Dataproduct } = useContext(Context);
    const handleSearch = (e) => {
        e.preventDefault(); // Fix the typo here
        setsearchproduct(e.target.value);
        const filteredProducts = Dataproduct.flatMap((value) => value.product.filter((item) => item.name.toLowerCase().includes(searchproduct.toLowerCase())));
        setseachss(filteredProducts);
        setSearchNotFound(filteredProducts.length === 0);
    };
    useEffect(() => {
        if (searchproduct) {
            const timeout = setTimeout(() => {}, 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [searchproduct]);

    const handleNavbarToggle =()=>{
        setshowbar(!showbar);
    }
 

    return (
        <>
            <Container fluid style={{ padding: "0" }}>
                <div className="nav">
                    <div className={`home ${showbar ? "active" : ""}`}>
                        <ul>
                            <li>
                                <Link to={"/deploy-react-js/"}> TRANG CHỦ</Link>
                            </li>
                            <li>
                                <Link to={"/deploy-react-js/BỘSIÊUTẬP"}>BỘ SIÊU TẬP</Link>
                            </li>
                            <li>
                                <Link to={"/deploy-react-js/NEW"}>NEW</Link>
                            </li>
                            {/* <li>
                            <Link to={"QUẦN NAM"}>QUẦN NAM VS ÁO NAM</Link>
                        </li> */}
                            <li>
                                <Link to={"/deploy-react-js/PHỤKIỆN"}>PHỤ KIỆN</Link>
                            </li>
                            <li>
                                <Link to={"/deploy-react-js/SALE_HOT"}>SALE_HOT</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="icon">
                        <InputGroup className="seachicon">
                            <InputGroup.Text id="basic-addon1">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </InputGroup.Text>
                            <Form.Control placeholder="Search..." onChange={handleSearch} value={searchproduct} />
                        </InputGroup>
                        <i className="fa-solid fa-cart-shopping" onClick={handlecart}>
                            <span className="quality-cart">{number}</span>
                        </i>

                        <i className="fa-solid fa-bars" onClick={handleNavbarToggle}></i>
                    </div>
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
                <footer>
                    <p>© 2023 Trang bán quần áo. All rights reserved.</p>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>36 phường Sơn Kỳ, quận Tân Phú, TPHCM
                    </p>

                    <p>
                        <i className="fa-solid fa-globe"></i> Email: info@4menshop.com
                    </p>
                </footer>
                {/* <CartComponent showcart={showcart} setshowcart={setshowcart} /> */}
            </Container>

            {searchproduct.length > 0 && (
                <>
                    <div className="Card-search" ref={cardSearchRef}>
                        <Row>
                            <h4>Sản phẩm</h4>
                            {searchNotFound ? (
                                <p>Không tìm thấy kết quả phù hợp</p>
                            ) : (
                                searchass.map((value, key) => (
                                    <Col key={key} sm={6} md={4} lg={4}>
                                        <SearchComponent value={value} key={key} searchDetail={setsearchproduct} />
                                    </Col>
                                ))
                            )}
                        </Row>
                    </div>
                </>
            )}
        </>
    );
}

export default BaseComponent;
