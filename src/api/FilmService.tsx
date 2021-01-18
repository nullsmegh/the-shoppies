import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';

const primaryEndpoint: URL = new URL(environment.apiUrl);

primaryEndpoint.searchParams.append("apikey", environment.apiKey);

const getFilm = (id: string) => fromFetch(primaryEndpoint.toString() + "&i=" + id).pipe(switchMap(response => response.json()));

const searchFilm = (search: string) => fromFetch(primaryEndpoint.toString + "&s=" + search).pipe(switchMap(response => response.json()));

export { getFilm, searchFilm }