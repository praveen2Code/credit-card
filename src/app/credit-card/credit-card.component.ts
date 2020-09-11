import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  userFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      creditCardNumber: [
        '',
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ],
    });

    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function () {
      $('input').keyup(function () {
        if ($(this).val().length == $(this).attr('maxlength')) {
          $(this).next().focus();
        }
      });
    });
  }
}
