import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { BidService } from '../../services/bid.service';
import { MatTableDataSource } from '@angular/material';
import  jsdocx  from 'jsdocx';
=======
import { BidService } from '../../services/bid.service';
>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d

@Component({
  selector: 'app-show-bid',
  templateUrl: './show-bid.component.html',
  styleUrls: ['./show-bid.component.css']
})
export class ShowBidComponent implements OnInit {
<<<<<<< HEAD
  displayedColumns = ['personId', '_id', 'addedAt', 'paperType', 'paperCost', 'persentByStorage', 'minCostByStorage', 'PDF'];
  dataSource: any;

  constructor(private bidService: BidService, private router: Router) { }

  ngOnInit() {
    this.bidService.getBids().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.reverse());
    })
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
=======
  displayedColumns = ['personId', '_id', 'addedAt', 'paperType', 'paperCost', 'persentByStorage', 'minCostByStorage'];
  dataSource: any;

  constructor(private bidService: BidService) { }

  ngOnInit() {
    this.bidService.getBids().subscribe((res: any[]) => {
      this.dataSource = res.reverse();
    })
  }
>>>>>>> 03267357cf19a3d03f9f6b49b40f6b6ba98a4c8d

}
