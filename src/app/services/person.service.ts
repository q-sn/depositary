import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class PersonService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf8'
  });

  private apiUrl = 'https://aminov-slivinskiy.c9users.io:8080/person/';
 
  constructor(
    private http: HttpClient) { }
    
  getPersons () {
    return this.http.get(this.apiUrl);
  }
  
  addPerson(personData) {
    return this.http.post(this.apiUrl, personData, {headers: this.headers})
      .catch((error: Response) => {
        return Observable.throw('Сервер недосутупен. Попробуйте позже.');
      });
  }

}
