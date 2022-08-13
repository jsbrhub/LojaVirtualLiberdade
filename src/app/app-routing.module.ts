import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosModule } from './produtos/produtos.module';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'produtos'},
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos/produtos.component').then(m => ProdutosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
