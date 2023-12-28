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
                    <Route path="/deploy-react-js/" element={<BaseComponent />}>
                        <Route index element={<HomeComponent />} />
                        <Route path="/deploy-react-js/detail/:id" component={<DetailProduct />} />
                        <Route path="/deploy-react-js/BỘSIÊUTẬP" element={<BoSuuTapComponent />} />
                        <Route path="/deploy-react-js/NEW" element={<NewComponent />} />
                        <Route path="/deploy-react-js/SALE_HOT" element={<SaleComponent />} />
                        <Route path="/deploy-react-js/PHỤKIỆN" element={<PhukienComponent />} />
                        <Route path="/deploy-react-js/cart" element={<CartComponent />} />
                    </Route>
                </Routes>
            </AppContext>
        </>
    );
}

export default App;
