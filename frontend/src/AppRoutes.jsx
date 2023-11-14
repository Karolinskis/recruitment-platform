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

import HireWorker from "../views/employer/HireWorker";
import RateWorker from "../views/employer/RateWorker";
import CheckWorkerAvailability from "../views/employer/CheckWorkerAvailability";
import DeleteEmployerAccount from "../views/employer/DeleteAccount";
import SendEmailToWorker from "../views/employer/SendEmailToWorker";
import EditJobOffer from "../views/employer/EditJobOffer";

import RequireAuth from "../components/RequireAuth";
import DeleteAccount from "../views/account/DeleteAccount";
import JobAdView from "../views/post/JobAdView";

// Admin
import AdminDashBoard from "../views/admin/AdminDashboard";
import OffendingContent from "../views/admin/OffendingContent";
import AdminPostsList from "../views/admin/PostsList";
import AdminUsersList from "../views/admin/UserList";

// Errors
import Error404 from "../views/Error404";
import DeleteAccountPage from "../views/account/DeleteAccount";

// Employee
import FallowedWorkersListPage from "../views/employee/FallowedEmployersListPage";
import MyProfile from "../views/employee/MyProfile";
import EmployerList from "../views/employee/EmployerListPage";
import Review from "../views/employee/EmployerReviewPage";
import EmployeeJobOffer from "../views/employee/JobOffersPage";

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

        <Route path="employer/hire-worker" element={<HireWorker />} />
        <Route path="employer/rate-worker" element={<RateWorker />} />
        <Route
          path="employer/check-worker-availability"
          element={<CheckWorkerAvailability />}
        />
        <Route
          path="employer/delete-account"
          element={<DeleteEmployerAccount />}
        />
        <Route path="employer/send-email" element={<SendEmailToWorker />} />
        <Route path="employer/edit-offer" element={<EditJobOffer />} />

        <Route path="account/edit" element={<EditAccount />} />
        <Route path="jobsad/id" element={<JobOffer />} />
        <Route path="jobOffer" element={<JobOffer />} />
        <Route path="createAccount" element={<CreateRecruiterAccount />} />
        <Route path="job" element={<JobAd />} />

        <Route path="jobsad/edit/:id" element={<JobAdEdit />} />
        <Route path="jobsad-view/:id" element={<JobAdView />} />
        <Route path="job/create" element={<JobOfferCreate />} />

        <Route path="jobsad/:id" element={<JobAdEdit />} />
        <Route path="jobsad-view/:id" element={<JobAdView />} />
        <Route path="job/create" element={<JobOfferCreate />} />

        <Route path="account/edit" element={<EditAccount />} />
        <Route path="jobsad/id" element={<JobOffer />} />
        <Route path="jobOffer" element={<JobOffer />} />
        <Route path="createAccount" element={<CreateRecruiterAccount />} />
        <Route path="job" element={<JobAd />} />
        <Route path="jobsad/edit/:id" element={<JobAdEdit />} />
        <Route path="jobsad-view/:id" element={<JobAdView />} />
        <Route path="job/create" element={<JobOfferCreate />} />

        {/* Admin */}
        <Route path="admin/dashboard" element={<AdminDashBoard />} />
        <Route
          path="admin/offendingContent/:type"
          element={<OffendingContent />}
        />
        <Route path="admin/posts" element={<AdminPostsList />} />
        <Route path="admin/users" element={<AdminUsersList />} />

        {/* Employee */}
        <Route path="employee/MyProfile" element={<MyProfile />} />
        <Route
          path="employee/FallowedEmployers"
          element={<FallowedWorkersListPage />}
        ></Route>
        <Route path="EmployersListPage" element={<EmployerList />} />
        <Route path="/employee/review" element={<Review />} />
        <Route path="/offers" element={<EmployeeJobOffer />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
