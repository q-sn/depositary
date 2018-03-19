import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BidService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf8'
  });

  private apiUrl = 'https://aminov-slivinskiy.c9users.io:8080/bid/';
 
  constructor(
    private http: HttpClient) { }
    
  getBids () {
    return this.http.get(this.apiUrl);
  }
  
  addBid(bidData) {
    return this.http.post(this.apiUrl, bidData, {headers: this.headers})
      .catch((error: Response) => {
        return Observable.throw('Сервер недосутупен. Попробуйте позже.');
      });
  }

}
