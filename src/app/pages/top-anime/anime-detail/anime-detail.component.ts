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

  anime: any;

  constructor(
      public modalController: ModalController,
      private jikan: JikanService,
      ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getAnimeDetail();
  }

  getAnimeDetail() {
    console.log(this.id);
    this.jikan.getAnimeDetail(this.id).subscribe(data => {
      this.anime = data;
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
