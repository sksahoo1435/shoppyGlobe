import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';


// Lazy load components
const ProductList = lazy(() => import('./components/product/ProductList'));
const ProductDetail = lazy(() => import('./components/product/ProductDetail'));
const Cart = lazy(() => import('./components/cart/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

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

// Routers of the components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;