import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subject, takeUntil } from "rxjs";
import { PlaylistModel } from "../../../../modules/shared/interfaces/playlist.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../store/state/app.state";
import { ActivatedRoute, Router } from "@angular/router";
import { selectPlaylists } from "../../../../store/selectors/app.selectors";
import { PlaylistsState } from "../../../../store/state/playlists.state";

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnDestroy, OnChanges {
  public playlistsState$: Observable<PlaylistsState>
  private _unSub$: Subject<void>;

  constructor(private _store: Store<AppState>, private _router: Router, private _route: ActivatedRoute) {
    this._unSub$ = new Subject<void>();

    this.playlistsState$ = this._store.select(selectPlaylists).pipe(takeUntil(this._unSub$))
  }

  public ngOnDestroy() {
    this._unSub$.next()
    this._unSub$.complete();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  showPlaylist(playlist: PlaylistModel) {
    this._router.navigate(['../playlist', playlist.id], {relativeTo: this._route})
  }
}
