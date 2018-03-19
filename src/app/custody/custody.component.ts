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
<<<<<<< HEAD
  
  persons: any;
  
=======

  persons: any;

>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d
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
<<<<<<< HEAD
    
    this.personService.getPersons().subscribe(res => {
      this.persons = res.reverse();
    })
  }
  
=======

    this.personService.getPersons().subscribe((res: any[]) => {
      this.persons = res.reverse();
    })
  }

>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d
  onSubmit() {
    const formData = this.form.value;
    this.addButtonText = 'Обработка...';
    this.addButtonStatus = false;

    this.custodyService.addCustody(formData)
      .subscribe((serverResponse) => {
        this.addButtonText = 'Добавлено';
        this.addButtonStatus = true;
        this.isAdded = true;
<<<<<<< HEAD
        
=======

>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d
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
