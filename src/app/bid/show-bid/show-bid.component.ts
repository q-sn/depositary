import { Component, OnInit } from '@angular/core';
import { BidService } from '../../services/bid.service';

@Component({
  selector: 'app-show-bid',
  templateUrl: './show-bid.component.html',
  styleUrls: ['./show-bid.component.css']
})
export class ShowBidComponent implements OnInit {
  displayedColumns = ['personId', '_id', 'addedAt', 'paperType', 'paperCost', 'persentByStorage', 'minCostByStorage'];
  dataSource: any;

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.bidService.getBids().subscribe((res: any[]) => {
      this.dataSource = res.reverse();
    })
  }

}
