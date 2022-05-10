import { createSelector } from "@ngrx/store";
import { PlaylistsState } from "../state/playlists.state";
import { selectPlaylists } from "./app.selectors";

// export const selectPlaylistById = createSelector(selectPlaylists,
//   ({playlists}: PlaylistsState, props: {id: string}) => playlists.find(p => p.id === props.id) ?? null
// )

export const selectPlaylistById = (playlistId: string) => createSelector(selectPlaylists,
  ({playlists}: PlaylistsState) => playlists.find(p => p.id === playlistId) ?? null)
