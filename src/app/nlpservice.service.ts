import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class NlpserviceService {

  constructor(private http:Http) { }
  search(value:String){
  	console.log("hi "+value);
  	return this.http.get("http://localhost:8080/v1/api/nlp/"+value).map(res=> res.json() || []);
  
  }

}
