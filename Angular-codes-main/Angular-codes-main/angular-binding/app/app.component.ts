import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPLOYEE DETAILS';
  showDetails:boolean = false;
  toggleShow() :void 
  {
    this.showDetails=!this.showDetails;
  }

  employees:any = [
    {id:100, name:'Tom', gender:'Male', salary:10000000, birthday:'7/2/1986', department:'cse', location: 'Mangalore', profile: 'trainee'},
    {id:101, name:'Croose', gender:'Male', salary:1000000, birthday:'8/2/1989', department:'ise', location: 'Bangalore', profile: 'Manager'},
    {id:102, name:'Rock', gender:'Male', salary:10000010, birthday:'9/3/1956', department:'cse', location: 'Mangalore', profile: 'trainer'},
    {id:103, name:'Tom', gender:'Male', salary:10000000, birthday:'10/2/1986', department:'ise', location: 'Bangalore', profile: 'HR'},
    {id:104, name:'Croose', gender:'Male', salary:1000000, birthday:'11/2/1989', department:'cse', location: 'Bangalore', profile: 'trainee'},
    {id:105, name:'Rock', gender:'Male', salary:10000010, birthday:'12/3/1956', department:'ise', location: 'Mangalore', profile: 'Manager'},
    {id:106, name:'Hob', gender:'Male', salary:10000000, birthday:'13/2/1986', department:'cse', location: 'Bangalore', profile: 'trainer'},
    {id:107, name:'Shaw', gender:'Male', salary:1000000, birthday:'14/2/1989', department:'ise', location: 'Mangalore', profile: 'HR'},
    {id:108, name:'Walker', gender:'Male', salary:10000010, birthday:'15/3/1956', department:'cse', location: 'Mangalore', profile: 'trainee'},
    {id:109, name:'Bill', gender:'Male', salary:10000000, birthday:'16/2/1986', department:'ise', location: 'Bangalore', profile: 'Manager'},
    {id:110, name:'Quill', gender:'Male', salary:1000000, birthday:'17/2/1989', department:'cse', location: 'Bangalore', profile: 'trainer'},
    {id:111, name:'Sony', gender:'Female', salary:10000010, birthday:'18/3/1956', department:'ise', location: 'Mangalore', profile: 'HR'},
    {id:112, name:'Kalisi', gender:'Female', salary:10000000, birthday:'19/2/1986', department:'cse', location: 'Bangalore', profile: 'trainee'},
    {id:113, name:'Marry', gender:'Female', salary:1000000, birthday:'20/2/1989', department:'ise', location: 'Mangalore', profile: 'Manager'},
    {id:114, name:'Hanna', gender:'Female', salary:10000010, birthday:'21/3/1956', department:'cse', location: 'Bangalore', profile: 'trainer'},
    {id:115, name:'Diana', gender:'Female', salary:10000000, birthday:'22/2/1986', department:'ise', location: 'Mangalore', profile: 'HR'},
    {id:116, name:'Iris', gender:'Female', salary:1000000, birthday:'23/2/1989', department:'cse', location: 'Bangalore', profile: 'trainee'},
    {id:117, name:'Carolin', gender:'Female', salary:10000010, birthday:'24/3/1956', department:'ise', location: 'Mangalore', profile: 'Manager'},
    {id:118, name:'Kathelin', gender:'Female', salary:10000000, birthday:'25/2/1986', department:'cse', location: 'Bangalore', profile: 'trainer'},
    {id:119, name:'Cathie', gender:'Female', salary:1000000, birthday:'26/2/1989', department:'ise', location: 'Bangalore', profile: 'HR'},
    {id:120, name:'Hashly', gender:'Female', salary:100000, birthday:'27/12/1963', department:'cse', location: 'Mangalore', profile: 'trainee'}
  ];

  department:any = [
    {id:'1', name:'cse'},
    {id:'2', name:'ise'},
    {id:'3', name:'Other'}
  ]

  
}
