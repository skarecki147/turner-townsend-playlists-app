import { Component } from '@angular/core';
import { PlaylistsActions } from "./store/actions/playlists.actions";
import { Store } from "@ngrx/store";
import { AppState } from "./store/state/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _store: Store<AppState>) {
    this._store.dispatch(PlaylistsActions.loadPlaylistsAction())
  }
}
