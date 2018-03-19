import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  displayedColumns = ['addedAt', 'bik', 'companyName', 'inn', 'legalAddress', 'mailAddress', 'paymentAccount', 'phoneNumber', '_id'];
  dataSource: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.personService.getPersons().subscribe(res => {
=======
    this.personService.getPersons().subscribe((res: any[]) => {
>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d
      this.dataSource = res.reverse();
    })
  }

}
