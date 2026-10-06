import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IEmployee } from '../Model/IEmployee';

@Injectable()
export class EmployeeService {

  private url:string='/assets/employee.json'
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url);
  }
}
