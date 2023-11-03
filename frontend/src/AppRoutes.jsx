import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../views/HomePage";
import Login from "../views/account/Login";

import DashBoard from "../views/DashBoardPage";
import CreateAccount from "../views/account/CreateAccount";
import CreateRecruiterAccount from "../views/account/CreateRecruiterAccount";
import Account from "../views/account/Account";
import ChangePassword from "../views/account/ChangePassword";
import EditAccount from "../views/account/EditAccount";
import JobAd from "../views/post/JobAd";
import JobAdEdit from "../views/post/JobAdEdit";
import JobAdCreate from "../views/post/JobAdCreate";
import JobOffer from "../views/post/JobOffer";
import JobOfferCreate from "../views/post/JobOfferCreate";
import Layout from "../components/Layout";

import RequireAuth from "../components/RequireAuth";
import DeleteAccount from "../views/account/DeleteAccount";
import JobAdView from "../views/post/JobAdView";

// Admin
import AdminDashBoard from "../views/admin/AdminDashboard";
import OffendingContentView from "../views/admin/OffendingContentView";

// Errors
import Error404 from "../views/Error404";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<CreateAccount />} />

        {/*<Route element={<RequireAuth/>}>*/}
          <Route path="jobsAd/create" element={<JobAdCreate />} />
          <Route path="jobsAd" element={<JobAd />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="account" element={<Account />} />
          <Route path="account/passwordReset" element={<ChangePassword />} />
          <Route path="account/deleteUser" element={<DeleteAccount />} />
          <Route path="account/edit" element={<EditAccount />} />
          <Route path="jobsad/id" element={<JobOffer />} />
          <Route path="jobOffer" element={<JobOffer/>} />
          <Route path="createAccount" element={<CreateRecruiterAccount />} />
          <Route path="job" element={<JobAd />} />
          <Route path="jobsad/:id" element={<JobAdEdit />} />
          <Route path="jobsad-view/:id" element={<JobAdView />} />
          <Route path="job/create" element={<JobOfferCreate />} />
        
        {/* Admin */}
          <Route path="admin/dashboard" element={<AdminDashBoard />} />
          <Route path="admin/offendingContent" element={<OffendingContentView />} />

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
