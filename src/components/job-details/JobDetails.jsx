import React from "react";
import { useLoaderData } from "react-router-dom";

// import icon image
import jobTitleIcon from "../../assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/Icons/Frame-2.png";
import emailIcon from "../../assets/Icons/Frame-3.png";
import salaryIcon from "../../assets/Icons/Frame.png";
import addressIcon from "../../assets/Icons/Location Icon.png";

const JobDetails = () => {
    const { data } = useLoaderData();

    // apply handler
    const applyHandler = (details) => {
        const {
            id,
            logo,
            job_title,
            company_name,
            job_type,
            time_type,
            location,
            salary,
        } = details;

        const previousData = localStorage.getItem("jobData");
        if (previousData) {
            localStorage.setItem(
                "jobData",
                JSON.stringify([
                    ...JSON.parse(previousData),
                    {
                        id,
                        logo,
                        job_title,
                        company_name,
                        job_type,
                        time_type,
                        location,
                        salary,
                    },
                ])
            );
        } else {
            localStorage.setItem(
                "jobData",
                JSON.stringify([
                    {
                        id,
                        logo,
                        job_title,
                        company_name,
                        job_type,
                        time_type,
                        location,
                        salary,
                    },
                ])
            );
        }
    };

    return (
        <div className="job-details-sec">
            <div className="page-title">
                <h2 className="text-center fw-bold">Job Details</h2>
            </div>
            {!data && <h1 className="text-center">There is an error</h1>}
            {data && (
                <div className="container pb-5">
                    <div className="row my-5">
                        <div className=" col-md-8">
                            <p>
                                <strong>Job Description:</strong>
                                {" " + data.description}
                            </p>
                            <p>
                                <strong>Job Responsibility:</strong>
                                {" " + data.responsibility}
                            </p>
                            <p>
                                <strong>Educational Requirements:</strong>
                                {" " + data.educational_Requirements}
                            </p>
                            <p>
                                <strong>Experiences:</strong>
                                {" " + data.experiences}
                            </p>
                        </div>
                        <div className="col-md-4 mt-5 mt-md-0">
                            <div
                                className="rounded p-4 mb-4"
                                style={{ backgroundColor: "#f9f9ff" }}
                                id="details-container"
                            >
                                <h6 className="fw-bold">Job Details</h6>
                                <hr />
                                <p>
                                    <img src={salaryIcon} alt="" />
                                    <strong className="fw-semibold">
                                        Salary:
                                    </strong>
                                    {data.salary} (Per Month)
                                </p>
                                <p>
                                    <img src={jobTitleIcon} alt="" />
                                    <strong className="fw-semibold">
                                        Job Title:
                                    </strong>
                                    {data.job_title}
                                </p>
                                <h6 className="fw-bold mt-4">
                                    Contact information
                                </h6>
                                <hr />
                                <p>
                                    <img src={phoneIcon} alt="" />
                                    <strong className="fw-semibold">
                                        Phone:
                                    </strong>
                                    {data.contact_information.phone}
                                </p>
                                <p>
                                    <img src={emailIcon} alt="" />
                                    <strong className="fw-semibold">
                                        Email:
                                    </strong>
                                    {data.contact_information.email}
                                </p>
                                <p className="address">
                                    <img src={addressIcon} alt="" />{" "}
                                    <strong className="fw-semibold">
                                        Address:
                                    </strong>
                                    {" " + data.location}
                                </p>
                            </div>

                            <button
                                onClick={() => applyHandler(data)}
                                className="btn w-100"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobDetails;
