import React, { useEffect } from 'react';
import { getFilm } from "api/FilmService";
import { OMDBFilm } from "constants/FilmInterface";

export const FilmCard = (props: {film: OMDBFilm}): JSX.Element => {
    return (
        <div className="c-film-card">
            <div className="c-film-card__container">
                <img className="c-film-card__image" src={props.film.Poster} />
                <h2 className="c-film-card__title">{ props.film.Title }</h2>
                <span className="c-film-card__meta-text">{ props.film.Year }</span>
                <a href="#" className="c-film-card__button">Nominate</a>
            </div>
        </div>
    );
};
