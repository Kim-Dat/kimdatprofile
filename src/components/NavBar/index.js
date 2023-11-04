import { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function NavBar() {
    const headerRef = useRef();
    const [navigation, setNavigation] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                headerRef.current.classList.toggle("sticky", window.scrollY > 100);
            }
        };
        const items = document.querySelectorAll(".nav-active a");
        items.forEach((item) => {
            item.addEventListener('click', () => {
                setNavigation(false)
            })
        });
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const isMenu = () => {
        setNavigation(true);
    };
    const isClose = () => {
        setNavigation(false);
    };
    return (
        <header ref={headerRef}>
            <div className="container">
                <div className={cx("nav-bar")}>
                    <a href="/" className={cx("logo")}>
                        Dev/at.
                    </a>
                    <div className={cx("navigation", `${navigation ? "active" : ""}`)}>
                        <div className={cx("nav-items", "nav-active")}>
                            <a href="#home" className="active">
                                Home
                            </a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                            <a href="#" className={cx("theme")}>
                                <i className="fa-regular fa-moon"></i>
                            </a>
                            <a className={cx("close")} onClick={isClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </a>
                        </div>
                    </div>
                    <div className={cx("nav-menu-btn")} onClick={isMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
