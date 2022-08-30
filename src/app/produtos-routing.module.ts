import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroProdutosComponent } from './produtos/cadastro-produtos/cadastro-produtos.component';

const routes: Routes = [
  {
    path:'', component: CadastroProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }