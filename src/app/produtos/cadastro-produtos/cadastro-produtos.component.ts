import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos';
import { ProdutosServicesService } from '../services/produtos-services.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {

  produtos: Produtos[] = [];
  displayedColumns = ['descricao','categoria','valor','quantidade','acoes'];
   
  constructor(private produtoService: ProdutosServicesService) { 
     
  }

  ngOnInit(): void {
    this.produtos = this.produtoService.list();
  }

}
