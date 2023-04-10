import React from "react";
import Banner from "../components/banner/Banner";
import FeaturedJob from "../components/featured-job/FeaturedJob";
import JobCategoryList from "../components/job-category-list/JobCategoryList";

const Home = () => {
    return (
        <div>
            <Banner />
            <JobCategoryList />
            <FeaturedJob />
        </div>
    );
};

export default Home;
