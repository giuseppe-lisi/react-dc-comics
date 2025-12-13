import s from "../modules/FooterContent.module.css";
import footerMenu from "../../data/footerLinks";

export default function () {
    return (
        <>
            <footer className={s.footer}>
                <div className={`${s.flex} wrapper`}>
                    <div className={s.footerNav}>
                        {footerMenu.map((section) => {
                            return (
                                <div>
                                    <ul key={section.id}>
                                        <h2>{section.header}</h2>
                                        {section.items.map((item) => {
                                            return (
                                                <li>{item.label}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.footerImgDiv}>
                        <img src="/img/dc-logo-bg.png" alt="dc logo" />
                    </div>
                </div>
            </footer>
        </>
    );
}
