import React, { useState } from "react";
import Counter from "./Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Button, Drawer, Space, Form, Input, InputNumber } from "antd";
import book1 from "../images/harrypotter1.jpg";
import "./comstyle.css";

export const Cart = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState("default");

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="cart">
        <Space>
          <Button
            className="cart-btn"
            type="text"
            onClick={showLargeDrawer}
            icon={<FontAwesomeIcon icon={faCartShopping} />}
          >
            <span
              style={{
                fontSize: "22px",
                color: "red",
                position: "relative",
                right: "0.2em",
                top: "8px",
                fontWeight: "500",
              }}
            >
              1 {/* Cart Amount */}
            </span>
          </Button>
        </Space>
      </div>
      <div className="drawer-style">
        <Drawer
          title={`Check Out`}
          placement="right"
          size={size}
          onClose={onClose}
          open={open}
        >
          <div className="mycart">
            <h2>My Cart</h2>
          </div>
          <div className="cart-container">
            <div className="cart-product">
              <hr></hr>
              <div className="book-cart">
                <div className="book">
                  <img src={book1} alt="" />
                </div>
                <div className="book-container">
                  <div className="book-title">
                    <div className="title">
                      <p style={{ fontSize: "15px" }}>
                        Harry Potter and The Philosopher's Stone
                      </p>
                      <p style={{ color: "#a9a9a9", fontSize: "14px" }}>
                        Author: JK Rolling
                      </p>
                      <div className="counter">
                        <Counter />
                      </div>
                    </div>
                  </div>
                  <div className="cart-price">
                    <p>Qty: 2</p>
                  </div>
                  <div className="cart-price">
                    <p>Total: $25.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: "10px" }}>
              <hr></hr>
            </div>
            <div className="checkout-price">
              <div style={{ width: "50%" }}></div>
              <div className="price">
                <table>
                  <thead>
                    <tr>
                      <th colSpan="3">Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td></td>
                      <td>$50.00</td>
                    </tr>
                    <tr>
                      <td>Taxes</td>
                      <td></td>
                      <td>$1.00</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td></td>
                      <td>$2.50</td>
                    </tr>
                    <tr>
                      <td>
                        <hr></hr>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "19px", fontWeight: "500" }}>
                        Total
                      </td>
                      <td></td>
                      <td
                        style={{
                          fontSize: "19px",
                          color: "red",
                          fontWeight: "500",
                        }}
                      >
                        $57.50
                      </td>
                    </tr>
                    <tr style={{ height: "12vh" }}>
                      <td
                        colSpan={3}
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <Button
                          type="primary"
                          shape="round"
                          size="large"
                          style={{
                            width: "280px",
                            height: "5vh",
                            fontFamily: "Lato",
                            backgroundColor: "#45474B",
                          }}
                        >
                          Check Out
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
