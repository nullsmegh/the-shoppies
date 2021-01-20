import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Search } from "./search";
import { Films } from "./films";
import { FilmSelection } from "./film-selection";
import { searchFilm, getFilms } from "api/FilmService";
import { Observable, Subject } from "rxjs";

import { fromEvent } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";

export const Main = (): JSX.Element => {
  const onSearch$ = new Subject();
  const popularFilms  = ['tt9130508','tt11161474','tt12676326','tt7126948', 'tt6723592','tt9620292','tt10451914','tt6878306'];
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Showing Popular films");

  useEffect(() => {
    onSearch$
      .pipe(
        filter((text: any) => text.length > 2),
        debounceTime(500),
        distinctUntilChanged(),
        tap(input => setSearchQuery("Showing Results For " + '"' + input + '"')),
        switchMap(input => searchFilm(input))
      )
      .subscribe((films) => {
          if(films.Response !== "False") {
              setFilms(films.Search); 
          }
      });
      
  });

  useEffect(() => {
      getFilms(popularFilms).subscribe(
          (films: any) => films.Response !== false && setFilms(films)
      );
  }, []);



  const handleSearchInput = (input: any) => {
    onSearch$.next(input);
  };
  return (
    <main className="c-main">
      <Container maxWidth="lg">
        <div className="c-main__grid">
          <div className="c-main__left">
            <Search onSearchInput={handleSearchInput} />
            <Films films={films} searchQuery={searchQuery} />
          </div>
          <div className="c-main__right">
            <FilmSelection />
          </div>
        </div>
      </Container>
    </main>
  );
};