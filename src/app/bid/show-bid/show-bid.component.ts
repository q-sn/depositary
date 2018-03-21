import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-show-bid',
  templateUrl: './show-bid.component.html',
  styleUrls: ['./show-bid.component.css']
})
export class ShowBidComponent implements OnInit {
  displayedColumns = ['personId', '_id', 'addedAt', 'paperType', 'paperCost', 'persentByStorage', 'minCostByStorage', 'PDF'];
  dataSource: any;

  constructor(private bidService: BidService, private router: Router) { }

  ngOnInit() {
    this.bidService.getBids().subscribe((res: any[]) => {
      this.dataSource = new MatTableDataSource(res.reverse());
    });
  }

  getWordFile(bidId) {
    window.location.href = 'https://aminov-slivinskiy.c9users.io:8080/word/' + bidId;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }
}
