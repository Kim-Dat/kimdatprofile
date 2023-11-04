import { avatars } from "../../data";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Home() {
    return (
        <section className={cx("wrapper")} id="home">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="d-none d-lg-block col-lg-2 col-xl-2">
                        <div className={cx("media-icons")}>
                            <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fnguyen.kimdat2003%3Figshid%3DMm81ZmNubms3dmJ4%26utm_source%3Dqr%26fbclid%3DIwAR0J5i9rHRpjmQO8Hu2pWdYwXR37oWjPyro5khO03M7w7PtkwnXP3byHGcM&h=AT2ou2nOtFFzwNF_M-_1X0eK6MYI3Y7bjuhQLQ6hCIKjZuOGdJnLbuhudqhc-TV5qWt-YYG7LNZquF6S9G5Cmg1m3dcIVV_l4ZcvHz8vWJk8NbaXs1sUH-sqcvHAqiy5J8i8Wg">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/nguyen.kimdat2003?mibextid=LQQJ4d">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://github.com/Kim-Dat">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                        <div className={cx("info")}>
                            <h2>Hi, I am Dat</h2>
                            <h3>Front-end Developer</h3>
                            <p>Self-improve website design and development skills, create quality products.</p>
                            <a href="https://www.facebook.com/nguyen.kimdat2003?mibextid=LQQJ4d" className="custom-btn">
                                Contact Me <i className="fa-regular fa-comment"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 col-xl-5">
                        <div className={cx("home-avatar")}>
                            <img src={avatars.home} alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={cx("scroll-down")}>
                        <a href="#about" className="d-flex justify-content-between align-items-center">
                            <i className="fa-solid fa-computer-mouse"></i>
                            <span>Scroll Down</span>
                            <i className="fa-regular fa-circle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
