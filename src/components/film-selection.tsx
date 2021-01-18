import React from "react";
import { Film } from "constants/FilmInterface"
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

export const FilmSelection = (): JSX.Element => {
    return (
        <div className="c-film-selection">
            <div className="c-film-selection__container">
               <h2 className="c-film-selection__heading">Your Nominations</h2>
               <div className="c-film-selection__items">
                   <div className="c-film-selection__item">
                       <div className="c-film-selection__image"></div>
                       <div className="c-film-selection__wrapper">
                           <h3 className="c-film-selection__title"></h3>
                           <span className="c-film-selection__meta-text"></span>
                       </div>
                       <CloseRoundedIcon className="c-film-selection__delete" />
                   </div>
               </div>
            </div>
        </div>
    );
};
