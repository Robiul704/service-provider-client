import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Home/Home";
import JoinasEmployee from "./Navber/JoinasEmployee";
import JoinasAdmin from "./Navber/JoinasAdmin";
import MakeaCustomRequest from "./Navber/UsersPage/MakeaCustomRequest";
import MyAssets from "./Navber/UsersPage/MyAssects";
import MyTeam from "./Navber/UsersPage/MyTeam";
import MyEmployeeList from "./Navber/AdminPage/MyEmployeeList";
import AddanEmployee from "./Navber/AdminPage/AddanEmployee";
import AssetList from "./Navber/AdminPage/AssetList";
import AddanAsset from "./Navber/AdminPage/AddanAsset";
import AllRequests from "./Navber/AdminPage/AllRequests";
import CustomRequestsList from "./Navber/AdminPage/CustomRequestsList";
import AuthProvider from "./Security/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Resister from "./Security/Resister";
import RequestforanAsse from "./Navber/UsersPage/RequestforanAsse";


import Package from "./Navber/AdminPage/Package";
import Payment from "./Payment/Payment";
import Login from "./Security/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/joinasemployee',
        element:<JoinasEmployee></JoinasEmployee>
      },
      {
        path:'/joinasadmin',
        element:<JoinasAdmin></JoinasAdmin>
      },
      {
        path:'/payment',
        element:<Payment></Payment>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/myteam',
        element:<MyTeam></MyTeam>
      },
      {
        path:'/myassets',
        element:<MyAssets></MyAssets>
      },
      {
        path:'/requestforanasse',
        element:<RequestforanAsse></RequestforanAsse>
      },
      {
        path:'/makeacustomrequest',
        element:<MakeaCustomRequest></MakeaCustomRequest>
      },
      {
        path:'/myemployeelist',
        element:<MyEmployeeList></MyEmployeeList>
      },
      {
        path:'/addanemployee',
        element:<AddanEmployee></AddanEmployee>
      },
      {
        path:'/package',
        element:<Package></Package>
      },
      {
        path:'/assetlist',
        element:<AssetList></AssetList>
      },
      {
        path:'/addanasset',
        element:<AddanAsset></AddanAsset>
      },
      {
        path:'/allrequests',
        element:<AllRequests></AllRequests>
      },
      {
        path:'/customrequestslist',
        element:<CustomRequestsList></CustomRequestsList>
      },
      {
        
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/payment/:member',
        element:<Payment></Payment>
      },
    ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <HelmetProvider>
   <RouterProvider router={router} />
   </HelmetProvider>
     </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
);