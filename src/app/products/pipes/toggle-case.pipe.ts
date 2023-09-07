import { Pipe, PipeTransform } from '@angular/core';

/*
si tengo, ejemplo, mi nombre en mayúsculas y lo paso por el toggleCase pipe me regresará el nombre en minpusculas:
ALOYSIUS | toogleCase = aloysius
y si coloco mi nombre en minpuisculas y lo paso por el mismo toggleCase pipe, me regredará el valor en mayúsculas
aloysius | toogleCase = ALOYSIUS
*/

//Debo declarar este nuevo pipe personalizado en un módulo, en este caso, será en products.module.ts
@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform{
  //recibo valor string, regreso valor booleano
  transform(value: string, toUpper:boolean=false ):string {
    //console.log({value, toUpper});

    return (toUpper)//si booleano es correcto:
    ? value.toUpperCase()//dará al valor string el formato de mkatúsculas
    : value.toLowerCase();//caso contrario le dará formato minúsculas
  }

}
