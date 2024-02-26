import { avatars } from "../../data";
import SectionTitle from "../sectionTitle";
import styles from "./About.module.scss";
import classNames from "classnames/bind";
import avatar from"../../utils/images/z5195346518906_7973465bb56e23df3f9436917b0d07f4.jpg"
const cx = classNames.bind(styles);
function About() {
    return (
        <section className={cx("wrapper")} id="about">
            <div className="container">
                <SectionTitle>About me</SectionTitle>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className={cx("img")}>
                            <img src={avatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                    
                        <div className={cx("info")}>
                        
                            <div className={cx("description")}>
                                <h3>I'm Dat</h3>
                                <h4>My introduction</h4>
                                <p>
                                    I design and develop services for customers specializing creating stylish, modem
                                    website, web services and online stores. My passion is to design digital user
                                    experiences through meaningful interaction. Check out my Portfolio
                                </p>
                            </div>
                            <ul className={cx("professional-list")}>
                                <li className={cx("list-item")}>
                                    <h3>1+</h3>
                                    <span>
                                        Years of <br /> Experience
                                    </span>
                                </li>
                                <li className={cx("list-item")}>
                                    <h3>10+</h3>
                                    <span>
                                        Complete <br /> Potorasin
                                    </span>
                                </li>
                                <li className={cx("list-item")}>
                                    <h3>3+</h3>
                                    <span>
                                        Success <br /> Project
                                    </span>
                                </li>
                            </ul>
                            <a href="" className="custom-btn" alt={"alt"}>
                                Download CV
                                <i className="fa-solid fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
