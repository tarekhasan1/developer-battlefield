import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import location_image from "../../assets/Icons/Frame-4.png";
import dollar_image from "../../assets/Icons/Frame.png";
import "./Featured.style.scss";

const FeaturedJob = () => {
    const [features, setFeatures] = useState([]);
    const [showFeatures, setShowFeatures] = useState([]);
    const [isAllShow, setIsAllShaw] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("featured-job.json");
            const data = await response.json();
            console.log(data);
            setFeatures(data);
            setShowFeatures(data.slice(0, 4));
        };
        fetchData();
    }, []);

    // view details button handler
    const viewDetailsHandler = (id) => {
        navigate(`job-details/${id}`);
    };

    const showAllData = () => {
        setShowFeatures(features);
        setIsAllShaw(true);
    };

    return (
        <div className="container">
            <h2 className="text-center fw-bold">Featured Jobs</h2>
            <p className="text-center mb-3">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="mb-4" id="featured-job-container">
                {showFeatures &&
                    Array.isArray(showFeatures) &&
                    showFeatures.length > 0 &&
                    showFeatures.map((data, index) => (
                        <div key={index} className="feature-job-card">
                            <img className="card-img" src={data.logo} alt="" />
                            <h5 className="fw-semibold">{data.job_title}</h5>
                            <p className="text-muted fs-6">
                                {data.company_name}
                            </p>
                            <button className="btn click-button">
                                {data.job_type}
                            </button>
                            <button className="btn click-button">
                                {data.time_type}
                            </button>
                            <p className="mt-2 text-muted d-flex fw-semibold">
                                <span className="inline-block">
                                    <img src={location_image} alt="" />
                                    {data.location}
                                </span>
                                <span className="inline-block ms-4">
                                    <img src={dollar_image} alt="" /> Salary:
                                    {data.salary}
                                </span>
                            </p>
                            <button
                                onClick={() => viewDetailsHandler(data.id)}
                                className="btn"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
            </div>
            {!isAllShow && (
                <div className="text-center mb-5">
                    <button onClick={showAllData} className="btn">
                        see all jobs
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedJob;
