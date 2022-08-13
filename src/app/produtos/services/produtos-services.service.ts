import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServicesService {

  constructor() { }

  list() {
    return [{
      id:"01",
      name:"teste",
      
    }]
  }

}
