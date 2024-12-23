import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import BannerContainer from '../components/BannerPart/BannerContainer';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
         element: <BannerContainer/>
        }
      ]
    },
  ]);


export default router;