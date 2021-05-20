import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { ErrorComponent } from './error/error.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { CommentComponent } from './comment/comment.component';
import { FormComponent } from './form/form.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  /*{path: 'exemple', component: ExempleComponent},
  {path: 'del/:id', component: ExempleDelComponent},
  {path: 'home', component: HomeComponent },*/
  {path: '', component: HomeComponent },
  {path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeadComponent,
    ErrorComponent,
    HomeComponent,
    ObjectifComponent,
    CommentComponent,
    FormComponent,
    DownloadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
