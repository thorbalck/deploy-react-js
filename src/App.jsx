import { Route, Routes } from "react-router-dom";
import BaseComponent from "./Component/BaseComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./Component/HomeComponent/HomeComponent";
import BoSuuTapComponent from "./Component/BoSuuTapComponent/BoSuuTapComponent";
import NewComponent from "./Component/New/NewComponent";
import SaleComponent from "./Component/Sale/SaleComponent";
import PhukienComponent from "./Component/PhukienComponent/PhukienComponent";
import AppContext from "./assets/utils/AppContext";
import DetailProduct from "./Component/DetailProduct";
import CartComponent from "./Component/CartComponent";

function App() {
    return (
        <>
            <AppContext>
                <Routes>
                    <Route path="/" element={<BaseComponent />}>
                        <Route index element={<HomeComponent />} />
                        <Route path="/detail/:id" component={<DetailProduct />} />
                        <Route path="/BỘSIÊUTẬP" element={<BoSuuTapComponent />} />
                        <Route path="/NEW" element={<NewComponent />} />
                        <Route path="/SALE_HOT" element={<SaleComponent />} />
                        <Route path="/PHỤKIỆN" element={<PhukienComponent />} />
                        <Route path="/cart" element={<CartComponent/>}/>
                    </Route>
                </Routes>
            </AppContext>
        </>
    );
}

export default App;
