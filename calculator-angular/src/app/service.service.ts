import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private service : HttpClient) { }

  sendRequest(k: string) : Observable<string>
  {
    return this.service.get('http://localhost:8080/spring/do_operation' ,{responseType: 'text'} );
  }


}
