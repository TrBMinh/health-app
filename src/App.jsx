import ErrorPage from './ErrorPage';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import MyPage from './pages/MyPage';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MyPage />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      <Footer />
    </>
  );
}

export default App;
