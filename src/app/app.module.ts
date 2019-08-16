import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcceptionComponent } from './ecceptions/ecception/ecception.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EcceptionComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
