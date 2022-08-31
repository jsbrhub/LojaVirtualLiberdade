import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ProdutosModule } from './produtos/produtos.module';


const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'produtos'},
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/cadastro-produtos/cadastro-produtos.component').then(m => ProdutosModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
