import React, { useEffect } from 'react';
import { FilmCard } from "components/film-card"; 
import { getFilm } from "api/FilmService";

export const Films = (): JSX.Element => {
    useEffect(() => {
      getFilm('tt7126948').subscribe(r => console.log(r));
    });
    return (
        <div className="o-section">
            <div className="c-films">
                <h4 className="c-films__sub-heading">Showing Popular films</h4>
                <div className="c-films__grid">
                	<div className="c-films__row">
                		<div className="c-films__col">
                            <FilmCard />
                		</div>
                		<div className="c-films__col">
                            <FilmCard />
                		</div>
                        <div className="c-films__col">
                            <FilmCard />
                        </div>
                	</div>
                	<div className="c-films__row">
                		<div className="c-films__col">
                            <FilmCard />
                		</div>
                		<div className="c-films__col">
                            <FilmCard />
                		</div>
                        <div className="c-films__col">
                            <FilmCard />
                        </div>
                	</div>
                </div>
            </div>
        </div>
    );
};
