import "./logo.scss";
import styles from "../../utils/const.module.scss";

const Logo = () => {
    return (
        <picture className="logo">
            <source
                media={`(min-width: ${styles.triggerPoint})`}
                srcSet="/kasa/images/LOGO_desktop.webp"
            />
            <img src="/kasa/images/LOGO.webp" alt="Logo Kasa" />
        </picture>
    );
};

export default Logo;
