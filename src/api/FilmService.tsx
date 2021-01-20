import { of, forkJoin, from } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap, map, catchError } from "rxjs/operators";
import { getMutFilmPoster } from "utils/functions";
import { environment } from "environments/environment";

const primaryEndpoint: URL = new URL(environment.apiUrl);

primaryEndpoint.searchParams.append("apikey", environment.apiKey);

const getFilm = (id: string) =>
  fromFetch(primaryEndpoint.toString() + "&i=" + id).pipe(
    switchMap((response) => response.json())
  );

const searchFilm = (search: string) =>
  fromFetch(primaryEndpoint.toString() + "&s=" + search + "&type=movie").pipe(
    switchMap((response) => response.json()),
    map((films) => {
      if (films.Response === "True") {
        films["Search"].map(
          (film: any) => (film["Poster"] = getMutFilmPoster(film["Poster"]))
        );
      }
      return films;
    })
  );

const getFilms = (films: Array<string>) =>
  forkJoin(
    films.map((film) =>
      getFilm(film).pipe(
        map((film: any) => {
          if (film.Response === "True") {
            film["Poster"] = getMutFilmPoster(film["Poster"]);
          }
          return film;
        })
      )
    )
  );

export { getFilm, searchFilm, getFilms };
