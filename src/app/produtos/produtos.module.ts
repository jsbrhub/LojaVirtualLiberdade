import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImportsMaterialModule } from '../shared/imports-material/imports-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosRoutingModule } from '../produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';




@NgModule({
  declarations: [
    CadastroProdutosComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ImportsMaterialModule,
    SharedModule
  ]
})
export class ProdutosModule { }
