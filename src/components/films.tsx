import React, { useEffect } from 'react';
import { FilmCard } from "components/film-card"; 
import { getFilm } from "api/FilmService";

export const Films = (props: any): JSX.Element => {
    return (
        <div className="c-films">
            <h4 className="c-films__sub-heading">{props.searchQuery}</h4>
            <div className="c-films__grid">
            {
                props.films.map((film: any) => <div className="c-films__col"  key={film.imdbID}> <FilmCard film={film} /> </div>)
            }
            <div className="c-films__empty"></div>
            <div className="c-films__empty"></div>
            </div>
        </div>
    );
};
