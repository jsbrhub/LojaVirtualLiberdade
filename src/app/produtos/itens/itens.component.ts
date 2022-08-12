import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Produtos } from '../model/produtos';
import { ProdutosService } from '../services/produtos.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {
  
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},
    {text: 'Three', cols: 4, rows: 1, color: 'lightpink'},
  ];

  produtos$: Observable<Produtos[]>;
  displayedColumns = ['descricao','categoria','valor','quantidade'];
   
  constructor(
    private produtosServicos: ProdutosService,
    public dialog: MatDialog
    
    ) { 
    this.produtos$ = this.produtosServicos.list()
    .pipe(
      catchError(error => {
        this.onError('Error ao carregar dados');
        return of([]);  //of cria um observable 
      }))
  }

  ngOnInit(): void {

    console.log(this.produtos$);
  }

  montandoHtmlProduto() {

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
  

}
