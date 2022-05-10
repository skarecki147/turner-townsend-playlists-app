import { ActionReducerMap } from "@ngrx/store";
import { playlistsReducer } from "./playlists.reducer";
import { AppState } from "../state/app.state";

export const reducers: ActionReducerMap<AppState> = {
  playlists: playlistsReducer
}
