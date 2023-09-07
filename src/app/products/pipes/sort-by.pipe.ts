import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'shortBy'// sort es unsado parfa ordenar
})
export class SortByPipe implements PipeTransform {
//keyof me permite incluir los items de la interface de Hero para hacer más estricta la info mandada de regreso
  transform(herores: Hero[], SortBy?:keyof Hero | ''): Hero[] {
    console.log({herores, SortBy});
    switch(SortBy){
      case 'name'://avaluaré a y b, sonde si a es mayor a b regresaré valor de 1, y caso contrario un -1
        return herores.sort( (a,b)=>(a.name > b.name) ? 1 : -1 );

      case 'canFly':
        return herores.sort( (a,b)=>(a.canFly > b.canFly) ? 1 : -1 );

      case 'color':
        return herores.sort( (a,b)=>(a.color > b.color) ? 1 : -1 );

      default:
        return herores;
    }
  }

}
