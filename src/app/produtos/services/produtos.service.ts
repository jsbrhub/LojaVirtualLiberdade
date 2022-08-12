import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Produtos } from '../model/produtos'
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Produtos[]>(this.API)
    .pipe(
      take(1),
      tap(produtos => console.log(produtos))
    );
  }
}
 