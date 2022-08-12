import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsMaterialModule } from '../shared/imports-material/imports-material.module';
import { SharedModule } from '../shared/shared.module';
import { ItensComponent } from './itens/itens.component';
import { ProdutosRoutingModule } from './produtos-routing.module';




@NgModule({
  declarations: [
    ItensComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ImportsMaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
