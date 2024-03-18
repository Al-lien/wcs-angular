import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { minDateValidator } from './minDateValidator';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss',
})
export class MyFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]),
  });

  ngOnInit(): void {
    this.orderForm.valueChanges.subscribe((value) => {
      console.log('orderForm value changes : ', value);
    });
  }

  addPayments() {
    const paymentForm = this.fb.group({
      date: ['', Validators.required, minDateValidator(new Date())],
      amount: ['', Validators.required],
    });

    const payments = this.orderForm.get('payments') as FormArray;

    payments.push(paymentForm);
  }

  get payments(): FormArray {
    return this.orderForm.get('payments') as FormArray;
  }

  onSubmit() {
    console.log('Order form submitted : ', this.orderForm);
  }
}
