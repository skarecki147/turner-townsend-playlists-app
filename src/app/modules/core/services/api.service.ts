import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { PlaylistResponseModel } from "../../shared/interfaces/playlist-response.model";
import { PlaylistListModel } from "../../shared/interfaces/playlist-list.model";

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class ApiService {
  private readonly _baseUrl: string;

  constructor(private _http: HttpClient) {
    this._baseUrl = 'https://portal.organicfruitapps.com/programming-guides/v2/us_en-us'
  }

  public getAllPlaylists(): Observable<PlaylistListModel> {
    return this._http.get<PlaylistResponseModel>(`${this._baseUrl}/featured-playlists.jso`)
      .pipe(
        map(res => res.featuredPlaylists),
        map(featuredPlaylist => ({
          name: featuredPlaylist.name,
          playlists: featuredPlaylist.content
        } as PlaylistListModel))
      )
  }
}
