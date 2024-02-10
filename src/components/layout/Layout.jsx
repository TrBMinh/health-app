import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import BtnGoTop from '../ui/BtnGoTop';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BtnGoTop />
    </>
  );
}

export default Layout;
