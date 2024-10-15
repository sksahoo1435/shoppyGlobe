import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import Cart from './components/cart/Cart';
import NotFound from './components/NotFound';
import Header from './components/Header/Header';

// layout for the entire application.

const Layout = () => {
  return (
    <div className='layout_container' style={{width:"98vw"}}>
      <Header />
      <main style={{marginTop:"80px"}}>
        <Outlet />
      </main>
    </div>
  );
};

// routers of the components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
