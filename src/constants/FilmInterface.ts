export interface OMDBFilmRating {
     Source: string;
     Value: string;
}
export interface OMDBFilm {
     Title: string;
     Year: string;
     Rated: string;
     Released: string;
     Runtime: string;
     Genre: string;
     Director: string;
     Writer: string;
     Actors: string;
     Plot: string;
     Language: string;
     Country: string;
     Awards: string;
     Poster: string;
     Ratings: OMDBFilmRating[];
     Metascore: string;
     imdbRating: string;
     imdbVotes: string;
     imdbID: string;
     Type: string;
     DVD: string;
     BoxOffice: string;
     Production: string;
     Website: string;
     Response: string;
 }
