import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos';
import { ProdutosServicesService } from '../services/produtos-services.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos: Produtos[] = [];
  displayedColumns = ['descricao','categoria','valor','quantidade'];
   
  constructor(private produtoService: ProdutosServicesService) { 
     
  }

  ngOnInit(): void {
    this.produtos = this.produtoService.list();
  }

}
