import { createReducer, on } from "@ngrx/store";
import { PlaylistsActions } from "../actions/playlists.actions";
import { PlaylistsState } from "../state/playlists.state";

const initialState: PlaylistsState = {
  loading: false,
  name: '',
  playlists: []
}

// export const playlistsReducer = createReducer(initialState,
//   on(PlaylistsActions.loadPlaylistsAction, state => {
//     return ({...state, loading: true})
//   }),
//   on(PlaylistsActions.loadPlaylistsSuccessAction, (state, {type, ...payload}) => {
//     return ({...state, ...payload, loading: false})
//   }),
//   on(PlaylistsActions.loadPlaylistsFailureAction, (state) => {
//     return ({...state, loading: false})
//   }),
// )
export const playlistsReducer = createReducer<PlaylistsState>(
  initialState,
  on(PlaylistsActions.loadPlaylistsAction,
    (state): PlaylistsState => ({
      ...state,
      loading: true
    })
  ),
  on(PlaylistsActions.loadPlaylistsSuccessAction,
    (state, {type, ...payload}): PlaylistsState => ({
      ...state,
      ...payload,
      loading: false
    })
  ),
  on(PlaylistsActions.loadPlaylistsFailureAction,
    (state): PlaylistsState => ({
      ...state,
      loading: false
    })
  ),
)
