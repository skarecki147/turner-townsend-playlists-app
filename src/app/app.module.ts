import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { PlaylistsEffects } from "./store/effects/playlists.effects";
import { CoreModule } from "./modules/core/core.module";
import { reducers } from "./store/reducers/app.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([PlaylistsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
