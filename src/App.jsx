import React, { Suspense, lazy, useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const Home = lazy(() => import('./page/Home'));
const AboutUsPage = lazy(() => import('./page/About'));
const FurniturePage = lazy(() => import('./page/FurniturePage'));
const ContactPage = lazy(() => import('./page/ContactPage'));
const CartPage = lazy(() => import('./page/CartPage'));
const SignIn = lazy(() => import('./page/Signin'));
const Signup = lazy(() => import('./page/Signup'));
const UnAuthorized = lazy(() => import('./page/UnAuthorized'));
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
import Layout from './component/Layout'; 

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Home />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading home component</>,
    },
    {
      path: "/home",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Home />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading home component</>,
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <AboutUsPage />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading about component</>,
    },
    {
      path: "/furniture",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <FurniturePage />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading furniture component</>,
    },
    {
      path: "/contact",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <ContactPage />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading contact component</>,
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <CartPage />
          </Layout>
        </Suspense>
      ),
      errorElement: <>Error loading cart component</>,
    },
    {
      path: "/signin",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
        
            <SignIn />
         
        </Suspense>
      ),
      errorElement: <>Error loading sign-in component</>,
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
      
            <Signup />
       
        </Suspense>
      ),
      errorElement: <>Error loading sign-up component</>,
    },
    {
      path: "/admin/*",
      element: isLoggedIn ? (
        <Suspense fallback={<div>Loading...</div>}>
          <AdminLayout />
        </Suspense>
      ) : (
        <Navigate to="/signin" replace />
      ),
      errorElement: <>Error loading admin component</>,
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <UnAuthorized />
        </Suspense>
      ),
      errorElement: <>Error loading unauthorized component</>,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
