import React, { useEffect, useState } from "react";
import "./JobCategoryList.style.scss";

const JobCategoryList = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const response = await fetch("job-category.json");
                const data = await response.json();
                setCategory(data);
                // console.log(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchingData();
    }, []);
    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold">Job Category List</h2>
            <p className="text-center mb-3">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="job-category-list">
                {categories &&
                    Array.isArray(categories) &&
                    categories.length > 0 &&
                    categories.map((category, index) => (
                        <div key={index} className="category-card">
                            <img className="mb-3" src={category.logo} alt="" />
                            <h5 className="fw-semibold">{category.name}</h5>
                            <p className="text-black-50">
                                {category.job_available} Jobs Available
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default JobCategoryList;
