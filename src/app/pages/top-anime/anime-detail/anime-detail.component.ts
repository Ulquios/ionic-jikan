import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { JikanService} from '../../../api/jikan.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {

  @Input() id: string;

  anime = {
      background: '',
      title: '',
      episodes: '',
      premiered: '',
      image_url: '',
    };

  constructor(
      public modalController: ModalController,
      private jikan: JikanService,
      ) { }

  ngOnInit() {
    this.getAnimeDetail();
  }

  getAnimeDetail() {
    this.jikan.getAnimeDetail(this.id).subscribe(data => {
      this.anime.background = data.background;
      this.anime.title = data.title;
      this.anime.episodes = data.episodes;
      this.anime.premiered = data.premiered;
      this.anime.image_url = data.image_url;
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
