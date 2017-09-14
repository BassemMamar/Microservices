import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule, // because we use <router-outlet> and routerLink
    BrowserModule
  ],
  declarations: [CoreComponent, HeaderComponent, NavComponent, FooterComponent],
  exports: [
    CommonModule,
    RouterModule,
    BrowserModule,

    HeaderComponent,
    FooterComponent,
    NavComponent 

  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
