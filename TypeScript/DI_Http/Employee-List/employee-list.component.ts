import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  
  public employees:any[];
  constructor(private es:EmployeeService) {  }
  ngOnInit()
  {
    this.es.getEmployee().subscribe(data=>this.employees=data);
  } 
}
