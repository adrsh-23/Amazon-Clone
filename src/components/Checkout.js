import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal";

import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        {basket?.length === 0 ? (
          <div>
            <h2> Your shopping cart is empty </h2>
          </div>
        ) : (
          <div>
            <h2>Your Shopping cart </h2>
            <br />
            <hr />
            <br />
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        {basket.length > 0 && (
          <div>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
