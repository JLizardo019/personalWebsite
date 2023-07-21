import '../styles/global.css';

// you want some CSS to be loaded by every page, Next.js has support for that as well

// The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }