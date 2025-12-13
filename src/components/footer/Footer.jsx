import s from "../modules/FooterContent.module.css";

export default function () {
    return (
        <>
            <footer className={s.footer}>
                <div className={`${s.flex} wrapper`}>
                    <div className={s.footerNav}>
                        <div>
                            <div>
                                <h1>DC COMICS</h1>
                                <ul>
                                    <li>Characters</li>
                                    <li>Comics</li>
                                    <li>Movies</li>
                                    <li>TV</li>
                                    <li>Games</li>
                                    <li>Videos</li>
                                    <li>News</li>
                                </ul>
                            </div>
                            <div>
                                <h1>SHOP</h1>
                                <ul>
                                    <li>Shop DC</li>
                                    <li>Shop DC Collectibles</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1>DC</h1>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Privacy</li>
                                <li>Ad Choices</li>
                                <li>Advertisement</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent</li>
                                <li>CPSC</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h1>SITES</h1>
                            <ul>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.footerImgDiv}>
                        <img src="/img/dc-logo-bg.png" alt="dc logo" />
                    </div>
                </div>
            </footer>
        </>
    );
}
