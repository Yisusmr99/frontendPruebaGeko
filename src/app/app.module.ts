import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from "@angular/common";


const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'record',component:RecordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
     CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
