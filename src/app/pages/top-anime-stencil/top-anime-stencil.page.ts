import { Component, OnInit } from '@angular/core';
import {JikanService} from '../../api/jikan.service';
import 'ulq-components';
import {map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-top-anime-stencil',
  templateUrl: './top-anime-stencil.page.html',
  styleUrls: ['./top-anime-stencil.page.scss'],
})
export class TopAnimeStencilPage implements OnInit {

  topAnimeTitleList?: Array<string> = [];

  constructor(
      private jikan: JikanService,
  ) { }

  ngOnInit() {
    this.getTopAnimeTitle();
  }

  async getTopAnimeTitle() {
    await this.jikan.getTopAnime()
        .pipe(map(m => m.top))
        .subscribe(data => {
          this.topAnimeTitleList = data.map(d => d.title);
    });
  }
}
