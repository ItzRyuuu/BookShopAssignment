import React, { useState } from "react";
import { Button, Flex } from "antd";
import Navbar from "../../Components/Navbar/Navbar";
import { Cart } from "../../Components/Cart";
import search_logo from "../../images/search-b.png";
import "./product.css";
import Footer from "../../Components/Navbar/Footer";

export default function ProductScreen() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const products = [
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
    {
      name: "Game of thrones",
      imageUrl:
        "https://assets-prd.ignimgs.com/2022/11/01/world-1667334141452.jpg",
      author: "George R.R. Martin",
      price: "30",
    },
    {
      name: "The Lord of the Rings",
      imageUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      author: "J.R.R. Tolkien",
      price: "40",
    },
    {
      name: "Eragon 1",
      imageUrl: "https://m.media-amazon.com/images/I/91EJQU2B4cL.jpg",
      author: "Christopher Paolini",
      price: "15",
    },
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
    {
      name: "Game of thrones",
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfJuSYCe63Lppn8tJOE8vWH0nx8HZWWemz_PqZ01pbZI_iGTrX",
      author: "George R.R. Martin",
      price: "30",
    },
    {
      name: "The Lord of the Rings",
      imageUrl:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
      author: "J.R.R. Tolkien",
      price: "40",
    },
    {
      name: "Eragon 1",
      imageUrl: "https://m.media-amazon.com/images/I/91EJQU2B4cL.jpg",
      author: "Christopher Paolini",
      price: "15",
    },
    {
      name: "Eragon 1",
      imageUrl: "https://m.media-amazon.com/images/I/91EJQU2B4cL.jpg",
      author: "Christopher Paolini",
      price: "15",
    },
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
    {
      name: "Eragon 1",
      imageUrl: "https://m.media-amazon.com/images/I/91EJQU2B4cL.jpg",
      author: "Christopher Paolini",
      price: "15",
    },
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
    {
      name: "Eragon 1",
      imageUrl: "https://m.media-amazon.com/images/I/91EJQU2B4cL.jpg",
      author: "Christopher Paolini",
      price: "15",
    },
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
    {
      name: "Harry Potter",
      imageUrl:
        "https://ew.com/thmb/rvat6WP-MplFuFNA4xJ-aGKEADc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
      author: "J.K. Rowlling",
      price: "25",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">
          <h2 style={{ textAlign: "center" }}>Shop Page</h2>
        </div>
        <div className="hr-style">
          <hr></hr>
        </div>
        <div className="cate-btn">
          <Flex gap="2em" wrap>
            <Button>Education</Button>
            <Button>Food</Button>
            <Button>Fantasy</Button>
            <Button>Horror</Button>
            <Button>History</Button>
            <Button>Programming</Button>
          </Flex>
        </div>
        <div className="search-cart">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <img src={search_logo} alt="" />
          </div>
          <div className="cart-search">
            <Cart />
          </div>
        </div>

        <div className="display-product">
          {products.map((product, index) => {
            return (
              <div className="product-container" key={product.name + index}>
                <div className="combo-card">
                  <div key={index} className="product-card">
                    <img
                      className="product-Image"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="product-caption">
                    <div className="product-title">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="book-author">by {product.author}</div>
                    <div className="book-price">${product.price}</div>
                    <div className="addcart-btn">
                      <Button
                        style={{
                          width: "140px",
                          fontSize: "15px",
                          backgroundColor: "#45474B",
                        }}
                        type="primary"
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Footer />
        </div>
      </div>
    </>
  );
}
