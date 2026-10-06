import * as NewEmp from './Employee';
//import {MStud,EStud} from './Student';
import Default from './Student'


var e = new NewEmp.FullTimeEmployee(1001,'Rohit',40000,10) 
e.displayInformation()

var s = new Default(2,'Sumit') 
s.displayInformation()
