import styles from "./Header.module.css";

export default function () {
    return (
        <>
            <header className="wrapper">
                <div className={styles.header}>
                    <img src="/img/dc-logo.png" alt="dc logo" />
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <li>CHARACTERS</li>
                            <li className={styles.selected}>COMICS</li>
                            <li>MOVIES</li>
                            <li>TV</li>
                            <li>GAMES</li>
                            <li>COLLECTIBLES</li>
                            <li>VIDEOS</li>
                            <li>FANS</li>
                            <li>NEWS</li>
                            <li>SHOP</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
