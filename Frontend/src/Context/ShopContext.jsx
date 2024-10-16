import React, { createContext, useState, useEffect} from "react";

export const ShopContext = createContext(null);

const getDeafultCart = ()=>{
    let cart = {};
    for(let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product,setAll_Product] = useState([]);
    const [cartItems,setCartItems] = useState(getDeafultCart());

        useEffect(() =>{
            fetch('http://localhost:4000/allproducts')
            .then((response)=>response.json())
            .then((data)=>setAll_Product(data))
        },[]);
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        Object.keys(cartItems).forEach(itemId => {
            if (cartItems[itemId] > 0) {
                let itemInfo = all_product.find(product => product.id === Number(itemId));
                if (itemInfo) { // Check if itemInfo is found
                    totalAmount += itemInfo.new_price * cartItems[itemId];
                }
            }
        });
        return totalAmount; // Ensure return statement is outside the loop
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem; // Move return statement outside the loop
    }
    

    const contextValue = {getTotalCartItems,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider