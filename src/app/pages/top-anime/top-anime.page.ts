import { Component, OnInit } from '@angular/core';
import { JikanService} from '../../api/jikan.service';
import { ModalController } from '@ionic/angular';
import {AnimeDetailComponent} from './anime-detail/anime-detail.component';

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.page.html',
  styleUrls: ['./top-anime.page.scss'],
})
export class TopAnimePage implements OnInit {

  topAnimeList: any;

  constructor(
      private jikan: JikanService,
      public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getTopAnime();
  }

  getTopAnime() {
    this.jikan.getTopAnime().subscribe(data => {
      this.topAnimeList = data.top;
    });
  }

  async displayAnimeDetail(animeId) {
    const modal = await this.modalController.create({
      component: AnimeDetailComponent,
      componentProps: {
        id: animeId,
      }
    });
    return await modal.present();
  }

}
