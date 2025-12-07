import s from "./PreFooter.module.css";

export default function () {
    return (
        <>
            <div className={s.accent}>
                <nav className={`${s.nav} wrapper`}>
                    <ul>
                        <li>
                            <img
                                src="/img/buy-comics-digital-comics.png"
                                alt=""
                            />
                            <h3>DIGITAL COMICS</h3>
                        </li>
                        <li>
                            <img src="/img/buy-comics-merchandise.png" alt="" />
                            <h3>MERCHANDISE</h3>
                        </li>
                        <li>
                            <img
                                src="/img/buy-comics-subscriptions.png"
                                alt=""
                            />
                            <h3>SUBSCRIPTION</h3>
                        </li>
                        <li>
                            <img
                                src="/img/buy-comics-shop-locator.png"
                                alt=""
                            />
                            <h3>COMIC SHOP LOCATOR</h3>
                        </li>
                        <li>
                            <img src="/img/buy-dc-power-visa.svg" alt="" />
                            <h3>DC POWER VISA</h3>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
