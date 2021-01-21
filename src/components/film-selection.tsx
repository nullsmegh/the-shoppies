import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { SvgIcon } from '@material-ui/core';
import PopcornIcon from 'assets/icons/popcorn.svg';

export const FilmSelection = (props: any): JSX.Element => {
    return (
        <div className="c-film-selection" >
            <div className="c-film-selection__container">
                <h2 className="c-film-selection__heading">Your Nominations</h2>
                <div className="c-film-selection__items">
                {   props.storedFilms.map((film: any, index: any) => 
                        
                            <div className="c-film-selection__item" key={film.imdbID}>
                                <div className="c-film-selection__image" style={{backgroundImage: `url(${film.Poster})`}}></div>
                                <div className="c-film-selection__wrapper">
                                    <h3 className="c-film-selection__title">{ film.Title }</h3>
                                    <span className="c-film-selection__meta-text">{ film.Year }</span>
                                </div>
                                <CloseRoundedIcon className="c-film-selection__delete" onClick={() => props.removeFilm(film, index)} />
                            </div>
                    )
                }
                </div>
                { !props.storedFilms.length ? (
                <div className="c-film-selection__placeholder">
                    <SvgIcon component={PopcornIcon} className="c-film-selection__popcorn" color="primary" viewBox="0 0 512 512" /> 
                    <h3 className="c-film-selection__placeholder-text">It appears to be quite empty here, try nominating some films.</h3>
                </div> ) : "" }
            </div>
        </div>
    );
};
