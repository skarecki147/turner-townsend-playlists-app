import { AppState } from "../state/app.state";

export const selectPlaylists = (state: AppState) => state.playlists;
