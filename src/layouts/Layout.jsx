import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BtnGoTop from '../components/buttons/BtnGoTop';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BtnGoTop />
    </>
  );
}

export default Layout;
