import React from "react";
import Container from "@material-ui/core/Container";
import { Search } from "./search";
import { Films } from "./films";
import { FilmSelection } from "./film-selection";

export const Main = (): JSX.Element => {
    return (
        <main className="c-main">
            <Container maxWidth="lg">
            <div className="c-main__grid">
            <div className="c-main__left">
                <Search />
                <Films />
            </div>
            <div className="c-main__right">
                <FilmSelection />
            </div>
            </div>
            </Container>
        </main>
    );
};
