import { Component, OnInit } from '@angular/core';
import { JikanService} from '../../api/jikan.service';
import {AnimeList} from 'jikan-client/dist/interfaces/user/AnimeList';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.page.html',
  styleUrls: ['./top-anime.page.scss'],
})
export class TopAnimePage implements OnInit {

  topAnimeList: any;

  constructor(
      private jikan: JikanService
  ) { }

  ngOnInit() {
    this.getTopAnime();
  }

  async getTopAnime() {
    this.topAnimeList = await this.jikan.getTopAnime();
  }

}
