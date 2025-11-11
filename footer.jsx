import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div>
          <h2 className="footer-logo">Jibuy online shop</h2>
        </div>

        <table
          className="footer-table"
          role="table"
          aria-label="Footer information"
        >
          <thead>
            <tr>
              <th>Services</th>
              <th>Location</th>
              <th>Contacts</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <ul className="services-list">
                  <li>Electronics & Gadgets</li>
                  <li>Clothing & Accessories</li>
                  <li>Fast delivery & Returns</li>
                </ul>
              </td>

              <td>
                <address className="location">
                  <li>Huye market place</li>
                  <li>Rwabayanga</li>
                  <li>Hours: 24h/7days</li>
                </address>
              </td>
              <td>
                <ul>
                  <li>Phone:+250(794055620)</li>
                  <li>Email:jibuy@gmail.com</li>
                  <li>Contact us</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td
                rowSpan={3}
                style={{ textAlign: "center", paddingTop: "10px" }}>
                © {new Date().getFullYear()} Jibuy Online Shop. All rights
                reserved.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

export default Footer;
