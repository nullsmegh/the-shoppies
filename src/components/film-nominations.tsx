import React, { useState, useEffect } from "react";
import { OMDBFilm } from "constants/FilmInterface";

export const FilmNominations = (props: any): JSX.Element => {
    return (
        <div className="c-film-nominations">
        { props.films.map((film: any, index: any) => 
            <div className="c-film-nominations__nomination" key={film.imdbID}>
                <img src={film.Poster} className="c-film-nominations__image" />
                <h2 className="c-film-nominations__title">{ film.Title }</h2>
                <span className="c-film-nominations__meta-text">{ film.Year }</span>
            </div>
            )
        }
        </div>
    );
};
