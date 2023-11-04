import SectionTitle from "../sectionTitle";
import { services } from "../../data";
import styles from "./Services.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Services() {
    return (
        <section className={cx("wrapper")} id="services">
            <div className="container">
                <SectionTitle>Services</SectionTitle>
                <div className="row g-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-lg-4 col-xl-4">
                            <div className={cx("card")}>
                                <div className={cx("icon")}>
                                    <i className={service.icon}></i>
                                </div>
                                <div className={cx("title")}>{service.title}</div>
                                <div className={cx("description")}>{service.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
