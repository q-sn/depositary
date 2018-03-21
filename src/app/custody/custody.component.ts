import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustodyService } from '../services/custody.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-custody',
  templateUrl: './custody.component.html',
  styleUrls: ['./custody.component.css']
})
export class CustodyComponent implements OnInit {

  form: FormGroup;
  addButtonStatus: boolean = true;
  isAdded: boolean = false;
  addButtonText: string = 'Добавить';
  
  persons: any;
  
  paperTypes = [
    {value: 'вексель', viewValue: 'Вексель'},
    {value: 'облигация', viewValue: 'Облигация'},
    {value: 'акция', viewValue: 'Акция'},
    {value: 'закладная', viewValue: 'Закладная'},
    {value: 'коносамент', viewValue: 'Коносамент'}
  ];

  constructor(private custodyService: CustodyService, private personService: PersonService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'paperName': new FormControl(null, [Validators.required]),
      'registrationNumber': new FormControl(null, [Validators.required]),
      'quantity': new FormControl(null),
      'personId': new FormControl(null, [Validators.required])
    });

    this.personService.getPersons().subscribe((res: any[]) => {
      this.persons = res.reverse();
    })
  }

  onSubmit() {
    const formData = this.form.value;
    this.addButtonText = 'Обработка...';
    this.addButtonStatus = false;

    this.custodyService.addCustody(formData)
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

}
