import React from "react";
import bannerImage from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Banner.scss";

const Banner = () => {
    return (
        <div className="banner-sec  pt-4">
            <div className="container">
                <div className="banner-container row align-items-center">
                    <div className="banner-text col-md-6">
                        <h1 className="fw-bolder w-75">
                            Make your identity from{" "}
                            <span className="text-primary">Developer's BattleField</span>
                        </h1>
                        <p className="w-75">
                            Explore thousands of job opportunities with all the
                            information you need. Get yourself a good job among the best developer's all over the world. Manage all your job application from start to
                            finish.
                        </p>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="banner-img col-md-6 mb-4 mb-md-0 text-center">
                        <img
                            className="w-75 h-auto ms-0 ms-md-5"
                            src={bannerImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
