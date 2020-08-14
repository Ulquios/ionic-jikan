import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(
      private http: HttpClient
  ) { }

  getTopAnime(): Observable<any> {
    return this.http.get('https://api.jikan.moe/v3/top/anime/1');
  }

  getAnimeDetail(id): Observable<any>{
    return this.http.get('https://api.jikan.moe/v3/anime/' + id);
  }
}
