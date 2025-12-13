import s from "./modules/Main.module.css";
import comics from "../data/comics.jsx";

export default function () {
    return (
        <>
            <main className={s.main}>
                <div className={s.currentSeries}>
                    <h2>CURRENT SERIES</h2>
                </div>
                <div className={`${s.cardContainer} wrapper`}>
                    {comics.map((comic) => {
                        return (
                            <div className={s.comicCard}>
                                <div className={s.comicImgDiv}>
                                    <img
                                        src={comic.thumb}
                                        className={s.comicImg}
                                    />
                                </div>
                                <p>{comic.title}</p>
                            </div>
                        );
                    })}
                </div>
                <button className={s.button}>LOAD MORE</button>
            </main>
        </>
    );
}
