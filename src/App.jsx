import ErrorPage from './pages/ErrorPage';
import MyPage from './pages/MyPage';
import Layout from './layouts/Layout';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: 'my-page', element: <MyPage />, index: true }],
  },
  {
    path: '*',
    element: <Navigate to="my-page" />,
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
