import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerTitlePipe } from './players-list/playerTitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
