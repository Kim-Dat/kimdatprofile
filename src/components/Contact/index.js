import SectionTitle from "../sectionTitle";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Contact() {
    return (
        <section className={cx("wrapper")} id="contact">
            <div className="container">
                <SectionTitle>Contact Me</SectionTitle>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className={cx("info")}>
                            <h3>Let's discuss your project</h3>
                            <ul className={cx("list")}>
                                <li className={cx("item")}>
                                    <i className="fa-solid fa-map-location-dot"></i>
                                    <span>Nhu Xuan, Thanh Hoa or Ha Noi</span>
                                </li>
                                <li className={cx("item")}>
                                    <i className="fa-solid fa-envelope"></i>
                                    <a href="mailto:Nguyenkimdat13092003@gmail.com">
                                        <span>Nguyenkimdat13092003@gmail.com</span>
                                    </a>
                                </li>
                                <li className={cx("item")}>
                                    <i className="fa-solid fa-phone"></i>

                                    <span>+84 867 604 223</span>
                                </li>
                                <li className={cx("item")}>
                                    <i className="fa-solid fa-clock"></i>

                                    <span>Mon - Fri 8:00 AM to 5:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className={cx("form")}>
                            <p>
                                I'm always open to discussing product <br />
                                <span>design work or partnership.</span>
                            </p>
                            <form action="" className={cx("contact-form")}>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea"
                                    ></textarea>
                                    <label htmlFor="floatingTextarea">Message</label>
                                </div>
                                <button className="custom-btn-small">
                                    Send Message <i className="fa-regular fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
