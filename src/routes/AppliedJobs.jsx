import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import location_image from "../assets/Icons/Frame-4.png";
import dollar_image from "../assets/Icons/Frame.png";
import vector from "../assets/Icons/vector.png";
import "../components/featured-job/Featured.style.scss";
import "../route-styles/AppliedJobs.style.scss";

const AppliedJobs = () => {
    const [mainData, setMainData] = useState([]);
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const previousData = localStorage.getItem("jobData");
        const jobData = JSON.parse(previousData);
        if (previousData) {
            setMainData(jobData);
            setData(jobData);
        }
    }, []);

        // see only remote handler
        const seeRemoteJobs = () => {
            if (Array.isArray(mainData) && mainData.length > 0) {
                const remoteJobs = mainData.filter(
                    (jobData) => String(jobData.job_type).toLowerCase() === "remote"
                );
                setData(remoteJobs);
            }
        };
    
        // see only on-site handler
        const seeOnSiteJobs = () => {
            if (Array.isArray(mainData) && mainData.length > 0) {
                const OnsiteJobs = mainData.filter(
                    (jobData) => String(jobData.job_type).toLowerCase() === "onsite"
                );
                setData(OnsiteJobs);
            }
        };

    return (
        <div className="applied-job-sec">
            <div className="page-title">
                <h2 className="text-center fw-bold">Applied Jobs</h2>
            </div>
            <div className="container mt-5 mb-3">
                <dir className="text-end">
                <button
                onClick={seeRemoteJobs}
                className="rounded me-3 filter-btn"
            >
                Show remote jobs
            </button>
            <button
                onClick={seeOnSiteJobs}
                className="rounded filter-btn"
            >
                show Onsite jobs
            </button>
                </dir>
                <div id="applied-job">
                    {data &&
                        Array.isArray(data) &&
                        data.map((jobData, index) => (
                            <div
                                key={index}
                                className="job-card border rounded mb-4 p-4"
                            >
                                <div className="img-container rounded d-flex justify-content-center align-items-center">
                                    <img src={jobData.logo} alt="" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="feature-job-card">
                                        <h5 className="fw-semibold">
                                            {jobData.job_title}
                                        </h5>
                                        <p className="text-muted fs-6">
                                            {jobData.company_name}
                                        </p>
                                        <button className="btn click-button">
                                            {jobData.job_type}
                                        </button>
                                        <button className="btn click-button">
                                            {jobData.time_type}
                                        </button>
                                        <p className="mt-2 text-muted d-flex flex-wrap fw-semibold">
                                            <span className="inline-block">
                                                <img
                                                    src={location_image}
                                                    alt=""
                                                />
                                                {jobData.location}
                                            </span>
                                            <span className="inline-block ms-4">
                                                <img
                                                    src={dollar_image}
                                                    alt=""
                                                />
                                                Salary: {jobData.salary}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="btn-container d-flex justify-content-center align-items-center">
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `job-details/${jobData.id}`
                                            )
                                        }
                                        className="btn"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;
