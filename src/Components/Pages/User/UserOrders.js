import React from "react";
import { v4 as uuidv4 } from "uuid";

const orders = [
  {
    number: "134249683",
    date: "20.02.2020",
    totalPrice: "2000",
    status: "Placed",
  },
  {
    number: "134243435",
    date: "10.03.2020",
    totalPrice: "1000",
    status: "Delivered",
  },
  {
    number: "134249533",
    date: "02.04.2020",
    totalPrice: "300",
    status: "Delivered",
  },
];

export default function UserDetails() {
  return (
    <>
      {orders.map((order) => {
        return (
          <div className="col-12" key={uuidv4()}>
            <div className="userOrderWrapper">
              <h5>
                Order number:
                <span className="userOrderTextMargin">{order.number}</span>
              </h5>
              <p className="userOrderDetail">
                Order date:
                <span className="userOrderTextMargin">{order.date}</span>
              </p>
              <p className="userOrderDetail">
                Total price:
                <span className="userOrderTextMargin">{order.totalPrice}</span>
              </p>
              <p className="userOrderDetail userOrderDetailStatus">
                <span>
                  Order status:
                  <span className="userOrderDetailColor userOrderTextMargin">
                    {order.status}
                  </span>
                </span>
                <a className="userOrderDetailButton" href="/#">
                  Order details
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
