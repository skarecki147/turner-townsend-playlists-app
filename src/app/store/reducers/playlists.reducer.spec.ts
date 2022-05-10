import { PlaylistListModel } from "src/app/modules/shared/interfaces/playlist-list.model";
import { PlaylistsActions } from "../actions/playlists.actions";
import { playlistsReducer } from "./playlists.reducer";

describe("Playlist reducer", () => {
  it("should set loading to true", () => {
    const expected = {
      loading: true,
      name: "",
      playlists: [],
    };

    const action = {type: "[PLAYLISTS] Load playlists"} as any;
    expect(playlistsReducer(undefined, action)).toEqual(expected);
  });

  it("should load playlist with success", () => {
    const payload: PlaylistListModel = {
      name: "Reggae",
      playlists: [
        {
          id: "543",
          kind: "yep",
          name: "author",
          url: "anyUrl",
          curator_name: "curatorName",
          artwork: "art",
        },
      ],
    };

    const expected = {
      loading: false,
      name: payload.name,
      playlists: payload.playlists,
    };

    const action = PlaylistsActions.loadPlaylistsSuccessAction(payload)
    expect(playlistsReducer(undefined, action)).toEqual(expected);
  });

  it("should load playlist with failure", () => {
    const expected = {
      loading: false,
      name: "",
      playlists: [],
    };

    const action = PlaylistsActions.loadPlaylistsFailureAction({});
    expect(playlistsReducer(undefined, action)).toEqual(expected);
  });
});
