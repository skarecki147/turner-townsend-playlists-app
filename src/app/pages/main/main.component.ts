import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectPlaylists } from "../../store/selectors/app.selectors";
import { AppState } from "../../store/state/app.state";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject, takeUntil } from "rxjs";
import { PlaylistListModel } from "../../modules/shared/interfaces/playlist-list.model";
import { PlaylistModel } from "../../modules/shared/interfaces/playlist.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {
  private _unSub$: Subject<void>;
  public playlists$: Observable<PlaylistListModel>

  constructor(private _store: Store<AppState>, private _router: Router, private _route: ActivatedRoute) {
    this._unSub$ = new Subject<void>();

    this.playlists$ = this._store.select(selectPlaylists).pipe(takeUntil(this._unSub$))
  }

  public ngOnDestroy() {
    this._unSub$.next()
    this._unSub$.complete();
  }

  onClick() {

  }

  showPlaylist(playlist: PlaylistModel) {
    this._router.navigate(['playlist', playlist.id], {relativeTo: this._route})
  }
}
