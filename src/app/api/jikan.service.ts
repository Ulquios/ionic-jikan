import { Injectable } from '@angular/core';
import * as Mal from 'jikan-client';

@Injectable({
  providedIn: 'root'
})
export class JikanService {

  constructor() { }

  async getTopAnime() {
    return await Mal.Top.items('anime', 1);
  }
}
