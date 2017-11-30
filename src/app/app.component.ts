import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('fade', [
       state('void', style({ opacity: 0})),
       transition(':enter', [
         animate(1000)
       ])
     ]),


  ]
})
export class AppComponent {
  title = 'Search House';
  private apiUrl = 'https://www.anapioficeandfire.com/api/houses?page=9&pageSize=48';
  data: any = {};
  filteredName = '';
  selectChangeHandler (event, any){

  }



  constructor(private http: Http) {
    console.log('hello fellow user');
    this.getCharacters();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  getCharacters() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

}


// animations: [
//   trigger('myanimations',[
//     state('small', style({
//       transform: 'scale(1)',
//     })),
//     state('large', style({
//       transform: 'scale(1.8)',
//     })),
//
//     transition('small => large', animate('300ms ease-in'))
//   ]),
// ]
