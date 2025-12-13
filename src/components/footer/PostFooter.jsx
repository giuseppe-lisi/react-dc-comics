import s from "../modules/PostFooter.module.css";

export default function () {
    return (
        <>
            <div className={s.postFooter}>
                <div className={`${s.flex} wrapper`}>
                    <button className={s.button}>SIGN-UP NOW</button>
                    <div className={`${s.flex} ${s.socials}`}>
                        <h1 className={s.accent}>FOLLOW US</h1>
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
