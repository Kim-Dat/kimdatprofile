import { CircularProgressbar } from "react-circular-progressbar";
import SectionTitle from "../sectionTitle";
import { educations } from "../../data";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../../data";
import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Skills() {
    return (
        <section className={cx("wrapper")} id="skills">
            <div className="container">
                <SectionTitle>Skills</SectionTitle>
                <div className="row">
                    <div className="col-12">
                        <div className={cx("skills-description")}>
                            <h3>Skills & Education</h3>
                            <p>
                                For more than 5 years our experts have been accomplishing enough with modern web
                                Developer, new generation web and app programming language
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={cx("title", "mt-2")}>
                        <h4>
                            <label>Skills</label>
                        </h4>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="d-none d-lg-block d-xl-block col-lg-1 col-xl-1"></div>
                    <div className="col-12 col-lg-11 col-xl-11">
                        <div className="row justify-content-center g-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="col-6 col-lg-4 col-xl-4">
                                    <div className={cx("card")}>
                                        <div className={cx("circle")}>
                                            <CircularProgressbar
                                                value={skill.percent}
                                                strokeWidth={5.5}
                                                text={`${skill.percent}%`}
                                            />
                                        </div>
                                        <div className={cx("text")}>{skill.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={cx("title", "mt-5")}>
                        <h4>
                            <label>Education</label>
                        </h4>
                        {educations.map((education, index) => (
                            <div key={index} className="row py-3">
                                <div className="col-8">
                                    <div className={cx("education-info")}>
                                        <div className={cx("icon")}>
                                            <i className={education.icon}></i>
                                        </div>
                                        <span className={cx("year")}>{education.year}</span>
                                        <h3 className={cx("subtitle")}>{education.title}</h3>
                                        <p className={cx("description")}>{education.description}</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className={cx("education-img")}>
                                        <img src={education.logo} alt={education.logo} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
