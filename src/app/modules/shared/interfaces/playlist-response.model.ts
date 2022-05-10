import { PlaylistModel } from "./playlist.model";

export interface PlaylistResponseModel {
  featuredPlaylists: {
    name: string;
    content: PlaylistModel[]
  }
}
