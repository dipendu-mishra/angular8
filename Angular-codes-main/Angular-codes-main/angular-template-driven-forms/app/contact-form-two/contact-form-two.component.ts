import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form-two',
  templateUrl: './contact-form-two.component.html',
  styleUrls: ['./contact-form-two.component.css']
})
export class ContactFormTwoComponent implements OnInit {

  constructor() { }

  log(x: any) { console.log(x);}

  submit(f: any) { console.log(f);}

  ngOnInit(): void {
  }

}
