import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-Details',
  templateUrl: './employee-Details.component.html',
  styleUrls: ['./employee-Details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  
  public employees:any[];
  constructor(private es:EmployeeService)
  {
    
  }
  ngOnInit()
  {
   this.es.getEmployee().subscribe(data=>this.employees=data);
  }
 
}
