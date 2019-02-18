import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavComponent } from "./Components/NavComponent/nav.component";
import { BoardComponent } from './Components/BoardComponent/board.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
