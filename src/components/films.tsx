import React from "react";
import { FilmCard } from "./film-card"; 

export const Films = (): JSX.Element => {
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
