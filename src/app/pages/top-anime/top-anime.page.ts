import { Component, OnInit } from '@angular/core';
import { JikanService} from "../../api/jikan.service";

@Component({
  selector: 'app-top-anime',
  templateUrl: './top-anime.page.html',
  styleUrls: ['./top-anime.page.scss'],
})
export class TopAnimePage implements OnInit {

  constructor(
      private jikan: JikanService
  ) { }

  ngOnInit() {
    this.jikan.getTopAnime();
  }

}
