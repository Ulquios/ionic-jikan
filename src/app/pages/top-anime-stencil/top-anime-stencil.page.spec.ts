import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopAnimeStencilPage } from './top-anime-stencil.page';

describe('TopAnimeStencilPage', () => {
  let component: TopAnimeStencilPage;
  let fixture: ComponentFixture<TopAnimeStencilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAnimeStencilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopAnimeStencilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
