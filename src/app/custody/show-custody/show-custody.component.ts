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
<<<<<<< HEAD
    this.custodyService.getCustodys().subscribe(res => {
=======
    this.custodyService.getCustodys().subscribe((res: any[]) => {
>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d
      this.dataSource = res.reverse();
    })
  }

}
