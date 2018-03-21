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
    this.personService.getPersons().subscribe((res: any[]) => {
      this.dataSource = res.reverse();
    })
  }

}
