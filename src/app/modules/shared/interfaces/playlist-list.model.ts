import { PlaylistModel } from "./playlist.model";

export interface PlaylistListModel {
  name: string;
  playlists: PlaylistModel[];
}
