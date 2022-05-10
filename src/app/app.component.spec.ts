import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from "@ngrx/store/testing";
import { PlaylistsState } from "./store/state/playlists.state";

describe('AppComponent', () => {
  const initialState: PlaylistsState = {
    loading: false,
    name: '',
    playlists: []
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
