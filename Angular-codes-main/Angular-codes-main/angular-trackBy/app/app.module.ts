import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerTitlePipe } from './players-list/playerTitle.pipe';
import { PlayerCountComponent } from './players-list/player-Count.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerTitlePipe,
    PlayerCountComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
