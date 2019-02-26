import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavComponent } from "./Components/NavComponent/nav.component";
import { BoardComponent } from './Components/BoardComponent/board.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './RouterSetting/RouterConfig';
import { BoardListComponent } from './Components/BoardListComponent/boardList.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./Components/LoginComponent/login.component";
import { RegisterComponent } from "./Components/RegisterComponent/register.component";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardComponent,
    BoardListComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
