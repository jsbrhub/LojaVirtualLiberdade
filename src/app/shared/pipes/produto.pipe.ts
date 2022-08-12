import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'produto'
})
export class ProdutoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'roupa' : return 'checkroom'; 
      case 'acessorio' : return 'child_care'; 
    }
    
    return 'r_mobiledata'
  }

}
