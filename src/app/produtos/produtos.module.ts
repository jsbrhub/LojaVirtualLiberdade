import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsMaterialModule } from '../shared/imports-material/imports-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';




@NgModule({
  declarations: [
    ProdutosComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ImportsMaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
