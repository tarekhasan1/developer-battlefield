import { NavLink } from "react-router-dom";
import "./Header.style.scss";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand fw-bolder text-secondary"><span className="text-danger">D</span>eveloper's <span className="text-danger">B</span>attle<span className="text-danger">F</span>ield</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    exact="true"
                                    activeclassname="active"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeclassname="active"
                                    to="statistics"
                                >
                                    Statistics
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    activeclassname="active"
                                    to="applied-jobs"
                                >
                                    Applied Jobs
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink activeclassname="active" to="blog">
                                    Blog
                                </NavLink>
                            </li>
                        </ul>

                        <button className="btn">Start Applying</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
