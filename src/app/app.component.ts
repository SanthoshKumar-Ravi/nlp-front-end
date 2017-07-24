import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {NlpserviceService } from './nlpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swis-It';
a=[];
  //result;
  constructor(private http:Http,private nlpservice:NlpserviceService){ }

  search(value){
  	console.log("hi "+value);
  	this.nlpservice.search(value).subscribe(a=>this.a = a);
  }
}
