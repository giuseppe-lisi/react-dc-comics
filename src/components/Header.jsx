import s from "./modules/Header.module.css";
import { navLinks } from "../data/navLinks";

export default function () {
    return (
        <>
            <header className="wrapper">
                <div className={s.header}>
                    <img src="/img/dc-logo.png" alt="dc logo" />
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            {navLinks.map((link) => {
                                return <li key={link.key} className={link.isActive ? `${s.selected}` : ""}>{link.label}</li>;
                            })}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
