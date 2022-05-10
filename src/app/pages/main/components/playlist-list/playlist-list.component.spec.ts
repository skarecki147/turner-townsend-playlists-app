import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistListComponent } from './playlist-list.component';
import { provideMockStore } from "@ngrx/store/testing";
import { PlaylistsState } from "../../../../store/state/playlists.state";
import { RouterTestingModule } from "@angular/router/testing";

describe('PlaylistListComponent', () => {
  let component: PlaylistListComponent;
  let fixture: ComponentFixture<PlaylistListComponent>;

  const initialState: PlaylistsState = {
    loading: false,
    name: '',
    playlists: []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistListComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
