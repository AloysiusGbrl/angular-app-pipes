import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower:string='aloysius';
  public nameUpper:string='ALOYSIUS';
  public fullName:string='AlOySiUs GabRIel';

  public customDate:Date=new Date();
}
