import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();
AppContext.propTypes = {
    children: PropTypes.node,
};
function AppContext({ children }) {
    const [handleOnChange, sethandleOnChange] = useState("");
    const [Dataproduct, setDataproduct] = useState([]);
    const [cart, setcart] = useState(false);
    const inittalStateHistory = JSON.parse(localStorage.getItem("history_product")) || [];
    const inittalStateCartusser = JSON.parse(localStorage.getItem("history_CartUser")) || [];
    const [history, sethistory] = useState(inittalStateHistory);
    const [cartuser, setcartuser] = useState(inittalStateCartusser);
    const [number, setnumber] = useState(0);
    const [size, setsize] = useState("");

    useEffect(() => {
        localStorage.setItem("history_product", JSON.stringify(history));
        setnumber(history.length);
    }, [history]);
    useEffect(() => {
        localStorage.setItem("history_CartUser", JSON.stringify(cartuser));
    }, [cartuser]);

    useEffect(() => {
        fetch("https://6561f5c7dcd355c083246707.mockapi.io/api/data_product")
            .then((data) => {
                return data.json();
            })
            .then((result) => {
                setDataproduct(result);
            });
    }, []);

    return (
        <>
            <Context.Provider
                value={{
                    Dataproduct,
                    setDataproduct,
                    cart,
                    setcart,
                    history,
                    sethistory,
                    handleOnChange,
                    sethandleOnChange,
                    setnumber,
                    number,
                    size,
                    setsize,
                    cartuser,
                    setcartuser,
                }}
            >
                {children}
            </Context.Provider>
        </>
    );
}

export default AppContext;
