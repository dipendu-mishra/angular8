import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  isChecked=true;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  food= 'pizza-1';

  minDate = new Date(2017, 1, 1);
  maxDate = new Date(2017, 8, 1);

  categories = [
    {name: 'Beginner'},
    {name: 'Intermediate'},
    {name: 'Advanced'}
  ];

  selectCatagory(category) {
    this.categories
    .filter(c => c != category)
    .forEach(c => c['selected']=false);

  category.selected = !category.selected;
  }

  onChange($event) {
    console.log($event);
  }

  
}
