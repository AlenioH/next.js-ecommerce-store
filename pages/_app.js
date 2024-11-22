// pages/_app.js
import '../styles/global.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
