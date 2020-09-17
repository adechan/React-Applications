import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {basket?.length === 0 ? (
        <div>
          <h2 className="checkout__title">Your Shopping Basket is empty</h2>
          <p className="checkout__description">
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {/* List out all of the checkout products */}
          {basket?.map((item) => {
            console.log(item);

            return (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Checkout;
