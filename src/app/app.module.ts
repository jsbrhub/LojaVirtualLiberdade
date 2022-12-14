import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ImportsMaterialModule } from './shared/imports-material/imports-material.module';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CabecalhoModule } from './cabecalho/cabecalho.module';
import { GridListMenuLateralComponent } from './grid-list-menu-lateral/grid-list-menu-lateral.component';
import { GridListMenuLateralModule } from './grid-list-menu-lateral/grid-list-menu-lateral.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    GridListMenuLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterOutlet,
    ProdutosModule,
    ImportsMaterialModule,
    CabecalhoModule,
    GridListMenuLateralModule,
    ProdutosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
