import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ImportsMaterialModule } from './imports-material/imports-material.module';
import { ProdutoPipe } from './pipes/produto.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ProdutoPipe
  ],
  imports: [
    CommonModule,
    ImportsMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    ProdutoPipe
  ]
})
export class SharedModule { }
