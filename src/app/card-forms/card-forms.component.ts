import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-forms',
  templateUrl: './card-forms.component.html',
  styleUrls: ['./card-forms.component.css']
})
export class CardFormsComponent implements OnInit {
  
  cardForm;
 
  
  constructor() {}

  ngOnInit() {
    this.cardForm = new FormGroup({
    name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    expiration: new DateFormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),
    securityCode: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
  });
  }

  onSubmit() {
    console.log('form was submited');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}