import s from "./modules/Main.module.css";
import comics from "../data/comics.jsx";
import CardComponent from "./CardComponent.jsx";

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
                            <CardComponent title={comic.title} img={comic.thumb}/>
                        );
                    })}
                </div>
                <button className={s.button}>LOAD MORE</button>
            </main>
        </>
    );
}
