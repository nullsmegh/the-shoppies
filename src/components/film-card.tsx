import React from "react";
import { Film } from "constants/FilmInterface"

export const FilmCard = (): JSX.Element => {
    return (
        <div className="c-film-card">
            <div className="c-film-card__container">
                <img className="c-film-card__image" src="" />
                <h2 className="c-film-card__title"></h2>
                <span className="c-film-card__meta-text"></span>
                <a href="#" className="c-film-card__button"></a>
            </div>
        </div>
    );
};
