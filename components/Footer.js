export default function Footer() {
  return (
    <div className="big">
      <div className="all">
        <hr></hr>
        <div className="wrapper">
          <ul>
            <li>Terms and conditions</li>
            <li>Cookies and privacy policy</li>
            <li className="rightsReserved">
              <img src="/favicon.png"></img>© 2020 Bist du Teppich!, inc. All
              rights reserved
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        * {
          font-family: 'DM Mono', monospace;
          color: #2f3640;
        }

        .all {
          width: 100%;
          height: 0;
          margin-top: 40px;
          margin-bottom: 0;
        }

        hr {
          border: 0.5px solid #636e72;
        }

        .wrapper > * {
          display: flex;
          flex-direction: row;
          list-style-type: none;
          justify-content: flex-start;
          align-items: center;
          font-size: 80%;
        }
        li {
          padding: 3px 15px;
          font-weight: 600;
        }
        li:hover {
          text-decoration: underline;
          text-decoration-color: #2f3640;
          transition: text-decoration 0.5s;
        }

        img {
          width: 30px;
          vertical-align: middle;
        }
        .rightsReserved {
          margin-left: auto;
        }
      `}</style>
    </div>
  );
}
