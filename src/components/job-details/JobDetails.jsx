import React from "react";
// import { useLoaderData } from "react-router-dom";
import "./JobDetails.style.scss";

const JobDetails = () => {
    // const { data } = useLoaderData();
    const data = true;
    return (
        <div className="job-details-sec">
            <div className="page-title">
                <h2 className="text-center fw-bold">Job Details</h2>
            </div>
            {!data && <h1 className="text-center">There is an error</h1>}
            {data && (
                <div className="container details-container">
                    <div></div>
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
