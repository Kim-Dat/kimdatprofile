import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className={cx("about")}>
                            <h2>Dev/at.</h2>
                            <p>Front-end Developer</p>
                            <a href="#about">About Me</a>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className={cx("info")}>
                            <h3>More</h3>
                            <ul className={cx("list-i")}>
                                <li>
                                    <a href="#skills">Skills</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#services">Services</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={cx("Follow")}>
                            <h3>Follow</h3>
                            <ul className={cx("list-f")}>
                                <li>
                                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fnguyen.kimdat2003%3Figshid%3DMm81ZmNubms3dmJ4%26utm_source%3Dqr%26fbclid%3DIwAR0J5i9rHRpjmQO8Hu2pWdYwXR37oWjPyro5khO03M7w7PtkwnXP3byHGcM&h=AT2ou2nOtFFzwNF_M-_1X0eK6MYI3Y7bjuhQLQ6hCIKjZuOGdJnLbuhudqhc-TV5qWt-YYG7LNZquF6S9G5Cmg1m3dcIVV_l4ZcvHz8vWJk8NbaXs1sUH-sqcvHAqiy5J8i8Wg">
                                        {" "}
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="https://www.facebook.com/nguyen.kimdat2003?mibextid=LQQJ4d">
                                        {" "}
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Kim-Dat">
                                        <i className="fa-brands fa-github-alt"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mt-5">
                            &copy; {new Date().getFullYear()} By Coding Snow. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
