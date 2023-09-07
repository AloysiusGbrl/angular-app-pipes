import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //    --- i18nSelect
  public name:string='Aloysius';
  public gender: 'male' | 'female'='male';
  public invitationMap={//objeto con un par de valores
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name='Geraldin';
    this.gender='female';
  }
  //    ---i18nPlural
  public clients:string[]=['Aloysius', 'Gabriel', 'Javier', 'Tomas', 'Axayacatl', 'Yunuen', 'Xalon']
  public clientsMap={
    '=0':'no tenemos ningún cliente en espera',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 personas esperando',
    'other':'tenemos # clientes esperando',
  }

  deleteClient():void{
    this.clients.shift()
  }

  //    ---KeyValue Pipe y Json Pipe
  public person={
    name:'Aloysius',
    age:36,
    address:'CDMX, México'
  }

  //    ---Async Pipe
  //interval es un tipo de observable al que se le suscribe cada cierto tiempo
  public myObservableTimer:Observable<number>=interval(2000).pipe(
    tap(value=> console.log('tap', value)),
  )
  //Ahora con promesa
  public promiseValue:Promise<string>=new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name='Axayacatl'
    }), 3500;
  })
}
