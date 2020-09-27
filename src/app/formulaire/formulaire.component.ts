import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  
  user:Client;
  name:string = "";
  forname:string;
  address:string;
  zip:string;
  city:string;
  coutry:string;
  mail:string;
  civility:string;
  login:string;
  password:string;
  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // display form values on success
    alert('SUCCESS!! :-)\n\n');
}

}
