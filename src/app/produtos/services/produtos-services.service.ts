import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServicesService {

  constructor(private httpClient: HttpClient) { }

  list(): Produtos[] {
    return [
      { id:"01", descricao:"teste", categoria:"teste", valor: 100, quantidade:5 }
    ];
  }

}
