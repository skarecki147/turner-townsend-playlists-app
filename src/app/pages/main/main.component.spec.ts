import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { PlaylistListComponent } from "./components/playlist-list/playlist-list.component";
import { MainRoutingModule } from "./main-routing/main-routing.module";
import { RouterTestingModule } from "@angular/router/testing";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        PlaylistComponent,
        PlaylistListComponent
      ],
      imports: [
        RouterTestingModule,
        MainRoutingModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
