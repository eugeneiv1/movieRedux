import {FC} from "react";


import css from './Actor.module.css'
import {IActor} from "../../../interfaces/actorInterface";
interface IProps {
    actor: IActor
}

const Actor:FC<IProps> = ({actor}) => {
    const {name, character, profile_path} = actor
    return (
        <div className={css.actorWrapper}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt="" className={css.actorImage}/>
            </div>
            <p>{name} ({character})</p>
        </div>
    );
};

export {Actor};