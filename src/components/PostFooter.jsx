import styles from "./PostFooter.module.css";

export default function () {
    return (
        <>
            <div className={styles.postFooter}>
                <div className={`${styles.flex} wrapper`}>
                    <button className={styles.button}>SIGN-UP NOW</button>
                    <div className={`${styles.flex} ${styles.socials}`}>
                        <h1 className={styles.accent}>FOLLOW US</h1>
                        <img src="/img/footer-facebook.png" alt="" />
                        <img src="/img/footer-periscope.png" alt="" />
                        <img src="/img/footer-pinterest.png" alt="" />
                        <img src="/img/footer-twitter.png" alt="" />
                        <img src="/img/footer-youtube.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
