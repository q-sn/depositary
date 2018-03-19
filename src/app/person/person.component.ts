import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  form: FormGroup;
  addButtonStatus: boolean = true;
  isAdded: boolean = false;
  addButtonText: string = 'Добавить';

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'companyName': new FormControl(null, [Validators.required]),
      'legalAddress': new FormControl(null, [Validators.required]),
      'mailAddress': new FormControl(null),
      'phoneNumber': new FormControl(null, [Validators.required]),
      'inn': new FormControl(null, [Validators.required]),
      'paymentAccount': new FormControl(null, [Validators.required]),
      'bik': new FormControl(null, [Validators.required])
    });
  }
  
  onSubmit() {
    const formData = this.form.value;
    this.addButtonText = 'Обработка...';
    this.addButtonStatus = false;
    // console.log(form.invalid && addButtonStatus);

    this.personService.addPerson(formData)
      .subscribe((serverResponse) => {
        this.addButtonText = 'Добавлено';
        this.addButtonStatus = true;
        this.isAdded = true;
        
        this.resetForm(this.form);
      });
  }
  
  resetForm(formGroup: FormGroup) {
    let control = null;
    formGroup.reset();
    formGroup.markAsUntouched();
    Object.keys(formGroup.controls).forEach((name) => {
      control = formGroup.controls[name];
      control.setErrors(null);
    });
  }

  // resetFormControlValidation(control) {
  //   control.markAsPristine();
  //   control.markAsUntouched();
  //   control.updateValueAndValidity();
  // }
}
