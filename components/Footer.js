import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <ul className="footer-links">
          <li>
            <a href="/terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
        <div className="footer-disclaimer">
          <img alt="logo" src="/favicon.png" className="footer-logo" />
          <span>
            © {new Date().getFullYear()} Bist du Teppich!, Inc. All rights
            reserved.
          </span>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: #f8f9fa;
          border-top: 1px solid #dfe4ea;
          padding: 20px 0;
          text-align: center;
          font-size: 0.9rem;
          color: #2f3640;
          margin-top: auto;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 20px;
        }

        .footer-links li a {
          text-decoration: none;
          color: #2f3640;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .footer-links li a:hover {
          color: #2ed573;
        }

        .footer-disclaimer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
        }

        .footer-logo {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 10px;
          }

          .footer-disclaimer {
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
