import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  //value: valor que recibiré : nombreValorQueRegresará
  transform(value: boolean): 'Vuela'|'No vuela'{
    return value//si value es true entonces:
    ? 'Vuela'//colocará string "vuela" en vez de "true"
    : 'No vuela';//caso contrario, mostrará string "No vyuela" en vez de "false"

  }
}
