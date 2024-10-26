import React from "react";
import { Divider, Table, Button } from "antd";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import "./order.css";

const App = () => {
  const handleView = (record) => {
    console.log("Viewing record:", record);
  };

  const columns = [
    {
      title: "Order Date",
      dataIndex: "date",
      width: "100px",
    },
    {
      title: "Book Title",
      dataIndex: "book",
      width: "200px",
      align: "center",
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      width: "80px",
      align: "center",
    },
    {
      title: "Total Price",
      dataIndex: "price",
      width: "100px",
      align: "center",
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "200px",
      align: "center",
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "100px",
      align: "center",
      render: (_, record) => (
        <Button
          style={{ backgroundColor: "#45474B" }}
          type="primary"
          onClick={() => handleView(record)}
        >
          View
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      date: new Date().toLocaleDateString(),
      book: "Harry Potter",
      price: 25,
      qty: 3,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      date: new Date().toLocaleDateString(),
      book: "Game of Thrones",
      price: 30,
      qty: 2,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      date: new Date().toLocaleDateString(),
      book: "Lord of The Rings",
      price: 35,
      qty: 1,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      date: new Date().toLocaleDateString(),
      book: "Game of Thrones",
      price: 30,
      qty: 2,
      address: "London No. 1 Lake Park",
    },
    {
      key: "5",
      date: new Date().toLocaleDateString(),
      book: "Lord of The Rings",
      price: 35,
      qty: 1,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "6",
      date: new Date().toLocaleDateString(),
      book: "Game of Thrones",
      price: 30,
      qty: 2,
      address: "London No. 1 Lake Park",
    },
    {
      key: "8",
      date: new Date().toLocaleDateString(),
      book: "Lord of The Rings",
      price: 35,
      qty: 1,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "9",
      date: new Date().toLocaleDateString(),
      book: "Game of Thrones",
      price: 30,
      qty: 2,
      address: "London No. 1 Lake Park",
    },
    {
      key: "10",
      date: new Date().toLocaleDateString(),
      book: "Lord of The Rings",
      price: 35,
      qty: 1,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <div>
        <div className="order-title">
          <h2>Order Lists</h2>
        </div>
        <div className="hr-style">
          <hr></hr>
        </div>
        <div className="table-div">
          <Divider />
          <Table
            style={{
              width: "80%",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
            }}
            scroll={{ y: 500 }}
            columns={columns}
            dataSource={data}
            tableLayout="fixed"
            pagination={{
              pageSize: 5,
              style: {
                color: "#45474B",
              },
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
