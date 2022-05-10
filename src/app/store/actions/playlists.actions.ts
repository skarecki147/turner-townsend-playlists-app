import { createAction, props } from "@ngrx/store";
import { PlaylistListModel } from "../../modules/shared/interfaces/playlist-list.model";
import { ApiError } from "../types/api-error";

export enum PlaylistsActionsTypes {
  LOAD_PLAYLISTS = '[PLAYLISTS] Load playlists',
  LOAD_PLAYLISTS_SUCCESS = '[PLAYLISTS] Load playlists success',
  LOAD_PLAYLISTS_FAILURE = '[PLAYLISTS] Load playlists failure'
}

export const loadPlaylistsAction = createAction(
  PlaylistsActionsTypes.LOAD_PLAYLISTS
)

export const loadPlaylistsSuccessAction = createAction(
  PlaylistsActionsTypes.LOAD_PLAYLISTS_SUCCESS,
  props<PlaylistListModel>()
)

export const loadPlaylistsFailureAction = createAction(
  PlaylistsActionsTypes.LOAD_PLAYLISTS_SUCCESS,
  props<ApiError>()
)

export const PlaylistsActions = {
  loadPlaylistsAction: loadPlaylistsAction,
  loadPlaylistsSuccessAction: loadPlaylistsSuccessAction,
  loadPlaylistsFailureAction: loadPlaylistsFailureAction
}

// export PlaylistsActions
// export class GetPlaylistsAction implements Action {
//   readonly type = PlaylistsActions.GET_PLAYLISTS;
// }
//
// export class GetPlaylistsSuccessAction implements ActionWithPayload<PlaylistListModel> {
//   readonly type = PlaylistsActions.GET_PLAYLISTS_SUCCESS;
//
//   constructor(public payload: PlaylistListModel) {
//   }
// }
//
// export class GetPlaylistsFailureAction implements ActionWithPayload<ApiError> {
//   readonly type = PlaylistsActions.GET_PLAYLISTS_FAILURE;
//
//   constructor(public payload: ApiError) {
//   }
// }
