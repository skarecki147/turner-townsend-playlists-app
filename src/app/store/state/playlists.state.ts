import { PlaylistListModel } from "../../modules/shared/interfaces/playlist-list.model";

export interface PlaylistsState extends PlaylistListModel {
  loading: boolean;
}
