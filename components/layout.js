import NavBar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
    return <> 
      <NavBar></NavBar>

      {children}

      <Footer></Footer>
      </>;
  }