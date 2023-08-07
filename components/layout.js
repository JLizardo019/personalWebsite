import NavBar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
    return <div id="layout">
        <NavBar></NavBar>

        <main>
            {children}
        </main>

        <Footer></Footer>
      </div>

  }