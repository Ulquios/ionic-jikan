import { Injectable } from '@angular/core';
import JikanTS from "jikants";

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor() { }

  getTopAnime() {
    // JikanTS.Top.items("anime", 1, "airing").then(b => console.log(b));
  }
}
