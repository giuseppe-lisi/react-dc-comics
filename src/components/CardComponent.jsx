import s from "./modules/Main.module.css";

export default function (props) {
    console.log(props);
    return (
        <div className={s.comicCard}>
            <div className={s.comicImgDiv}>
                <img src={props.img} className={s.comicImg} />
            </div>
            <p>{props.title}</p>
        </div>
    );
}
