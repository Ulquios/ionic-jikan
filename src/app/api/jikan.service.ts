import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor(
      private http: HttpClient
  ) { }

  getTopAnime() {
    return this.http.get('https://api.jikan.moe/v3/top/anime/1');
  }

  getAnimeDetail(id) {
    return this.http.get('https://api.jikan.moe/v3/anime/' + id);
  }
}
