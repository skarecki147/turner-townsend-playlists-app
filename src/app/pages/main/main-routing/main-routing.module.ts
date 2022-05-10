import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "../main.component";
import { PlaylistComponent } from "../components/playlist/playlist.component";
import { PlaylistListComponent } from "../components/playlist-list/playlist-list.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'playlists',
    component: PlaylistListComponent
  },
  {
    path: 'playlist/:id',
    component: PlaylistComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
