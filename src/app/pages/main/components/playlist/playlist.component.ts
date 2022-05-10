import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PlaylistModel } from "../../../../modules/shared/interfaces/playlist.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/state/app.state";
import { selectPlaylistById } from "../../../../store/selectors/playlists.selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent {
  public playlist$: Observable<PlaylistModel | null>;

  constructor(private _store: Store<AppState>, private _router: Router, private _route: ActivatedRoute) {
    this.playlist$ = this._store.select(selectPlaylistById(this._route.snapshot.params['id']))
  }

}
