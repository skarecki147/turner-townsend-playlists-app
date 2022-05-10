import { Injectable } from "@angular/core";
import { PlaylistsActions, PlaylistsActionsTypes } from "../actions/playlists.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ApiService } from "../../modules/core/services/api.service";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { PlaylistListModel } from "../../modules/shared/interfaces/playlist-list.model";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class PlaylistsEffects {

  getPlaylist$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PlaylistsActionsTypes.LOAD_PLAYLISTS),
      mergeMap(() => this._apiService.getAllPlaylists().pipe(
        map(res => PlaylistsActions.loadPlaylistsSuccessAction(res as PlaylistListModel)),
        catchError((err: HttpErrorResponse) =>
          of(PlaylistsActions.loadPlaylistsFailureAction({code: err.status, message: err.message})))
      )),
    )
  });

  playlistsFailure$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PlaylistsActionsTypes.LOAD_PLAYLISTS_FAILURE),
      tap((err) => console.log('error', err))
    )
  }, {dispatch: false});

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService
  ) {
  }

}
