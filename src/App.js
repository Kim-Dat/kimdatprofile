import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { useEffect, useRef } from "react";

function App() {
    const toTopRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            if (toTopRef.current) {
                toTopRef.current.classList.toggle("show", window.scrollY > 500);
            }
            const sections = document.querySelectorAll("section");
            const scrollY = window.pageYOffset;
            sections.forEach((section) => {
                let sectionHeight = section.offsetHeight;
                let sectionTop = section.offsetTop - 50;
                let id = section.getAttribute("id");
                const item = document.querySelector(".nav-active a[href*=" + id + "]");
                if (item) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        toTopRef.current.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div ref={toTopRef} className="scrollToTop-btn">
                <i className="fa-solid fa-arrow-up"></i>
            </div>
            <div className="App">
                <NavBar />
                <Home />
                <About />
                <Skills />
                <Services />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
