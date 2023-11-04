import styles from "./SectionTitle.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function SectionTitle({ children }) {
    return (
        <div className="row">
            <div className="col-12">
                <div className={cx("wrapper")}>
                    <h1 className={cx("section-title-01")}>{children}</h1>
                    <h2 className={cx("section-title-02")}>{children}</h2>
                </div>
            </div>
        </div>
    );
}

export default SectionTitle;
