import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import StripeCheckout from 'react-stripe-checkout';

const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

    const onToken = (token) => {
        console.log(token);
    }

    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e,index)=>{
            if(cartItems[e.id]>0)
            {
                return <div key={index}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                </div>
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Sub Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <StripeCheckout 
                    name='Bake-It'
                    description="Big Data Stuff"
                    billingAddress={true}
                    zipCode={true}
                    allowRememberMe
                    currency='INR'
                    amount= {getTotalCartAmount()*100}
                    token={onToken}
                    stripeKey="pk_test_51OjlJpSJBK3LY4RSUXyTcIUYJMKyg1X9jtj4nlew2o74yl29Z12GrtDoCGVPdkZms9gSXTiSDxnVAUwgnLuviaHW00SsnNWaeQ"
                    >
                        <button>PROCEED TO Pay</button>
                        </StripeCheckout>
                </div>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a Promo Code, Enter it Here!</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button >SUBMIT</button>
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default CartItems