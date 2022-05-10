import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../modules/shared/shared.module";
import { MaterialModule } from "../../modules/material/material.module";
import { MainComponent } from './main.component';
import { MainRoutingModule } from "./main-routing/main-routing.module";
import { PlaylistComponent } from './components/playlist/playlist.component';


@NgModule({
  declarations: [
    MainComponent,
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
