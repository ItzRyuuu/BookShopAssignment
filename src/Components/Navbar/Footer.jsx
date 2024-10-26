import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Book Shop Management System</h3>
          <p>&copy; 2024 Group Assignment. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <ul>
            <li>Chhorn Kuyheng</li>
            <li>Ly David</li>
            <li>Seng Sayheang</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
