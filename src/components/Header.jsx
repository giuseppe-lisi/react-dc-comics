import s from "./modules/Header.module.css";
import navLinks from "../data/navLinks";

export default function () {
    return (
        <>
            <header>
                <div className={`${s.header} wrapper`}>
                    <img src="/img/dc-logo.png" alt="dc logo" />
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            {navLinks.map((link) => {
                                return <li 
                                            key={link.key} 
                                            className={link.isActive ? `${s.selected}` : ""}>
                                            {link.label}
                                        </li>;
                            })}
                        </ul>
                    </nav>
                </div>
                <div className={s.headerImg}></div>
            </header>
        </>
    );
}
