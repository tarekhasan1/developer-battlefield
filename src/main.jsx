import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

// components import
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import JobDetails from "./components/job-details/JobDetails";

// routes import
import AppliedJobs from "./routes/AppliedJobs";
import Blog from "./routes/Blog";
import Home from "./routes/Home";
import Statistics from "./routes/Statistics";

// loaders import
import { JobDetailsLoader } from "./loaders/jobDetailsLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "job-details/:jobId",
                element: <JobDetails />,
                loader: JobDetailsLoader,
            },
            {
                path: "statistics",
                element: <Statistics />,
            },
            {
                path: "applied-jobs",
                element: <AppliedJobs />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
