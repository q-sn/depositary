import { Component, OnInit } from '@angular/core';
import { CustodyService } from '../../services/custody.service';

@Component({
  selector: 'app-show-custody',
  templateUrl: './show-custody.component.html',
  styleUrls: ['./show-custody.component.css']
})
export class ShowCustodyComponent implements OnInit {
  displayedColumns = ['paperName', 'registrationNumber', 'quantity', 'personId', '_id', 'addedAt'];
  dataSource: any;

  constructor(private custodyService: CustodyService) { }

  ngOnInit() {
    this.custodyService.getCustodys().subscribe((res: any[]) => {
      this.dataSource = res.reverse();
    })
  }

}
