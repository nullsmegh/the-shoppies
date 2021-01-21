import React, { useState, useEffect } from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { SvgIcon } from '@material-ui/core';
import { FilmNominations } from 'components/film-nominations';
import PopcornIcon from 'assets/icons/popcorn.svg';

export const FilmSelection = (props: any): JSX.Element => {

    const filmItems: any = React.createRef();

    const [modalVisibility, setModalVisibility] = useState(false); 

    const handleSubmit = (event: any) => (event.preventDefault(),setModalVisibility(true));

    const handleClose = (event: any) => (event.preventDefault(),setModalVisibility(false));



    return (
        <div className="c-film-selection" >
            <div className="c-film-selection__container">
                <h2 className="c-film-selection__heading">Your Nominations</h2>
                { props.storedFilms.length ? (
                <>
                <div className="c-film-selection__items" ref={filmItems} >
                { props.storedFilms.map((film: any, index: any) => 
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
                <a href="#" className={"c-film-selection__submit " + (props.storedFilms.length === 5 ? '' : 'c-film-selection__submit--disabled')} onClick={handleSubmit}> Submit Nominations</a>
                </>
                ) : '' }
                { !props.storedFilms.length ? (
                <div className="c-film-selection__placeholder">
                    <SvgIcon component={PopcornIcon} className="c-film-selection__popcorn" color="primary" viewBox="0 0 512 512" /> 
                    <h3 className="c-film-selection__placeholder-text">It appears to be quite empty in here, try nominating some films.</h3>
                </div> ) : "" }
            </div>
            <div className={"c-film-selection__modal " + (modalVisibility ? 'c-film-selection__modal--visible' : '')}>
                <div className="c-film-selection__modal-container">
                    <FilmNominations films={props.storedFilms} />
                    <h2 className="c-film-selection__heading c-film-selection__modal-text">Thank you for nominating the films.</h2>
                    <a className="c-film-selection__submit c-film-selection__submit--close" href="#" onClick={handleClose}>Close</a> 
                </div>
            </div>
        </div>
    );
};
