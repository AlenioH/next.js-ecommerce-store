import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Thx() {
  return (
    <div className="main">
      <Head>
        <title>Thank You - Bist du Teppich</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="container">
        <div className="thank-you-animation">
          <div className="circle">
            <svg viewBox="0 0 100 100" className="checkmark">
              <path
                className="checkmark-check"
                fill="none"
                stroke="#2ed573"
                strokeWidth="5"
                d="M20 50 l20 20 l40 -40"
              />
            </svg>
          </div>
        </div>
        <h1>Thank You for Your Purchase!</h1>
        <h2>Our team will contact you shortly.</h2>
        <p>You will receive an email confirmation with the order details.</p>
      </div>
      <Footer />

      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          padding-top: 100px;
        }

        .container {
          text-align: center;
          background: white;
          border-radius: 20px;
          padding: 30px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-out;
        }

        .thank-you-animation {
          margin-bottom: 20px;
        }

        .circle {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background: #2ed573;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .checkmark {
          width: 60%;
          height: 60%;
        }

        .checkmark-check {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation: drawCheck 0.6s ease-out forwards;
        }

        h1 {
          font-size: 1.8rem;
          color: #2d3436;
          margin-bottom: 10px;
        }

        h2 {
          font-size: 1.2rem;
          color: #636e72;
          margin-bottom: 20px;
        }

        p {
          font-size: 1rem;
          color: #b2bec3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawCheck {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem;
          }
          h2 {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}