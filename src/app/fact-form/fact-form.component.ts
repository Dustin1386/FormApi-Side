import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';


interface Fact {
  setUp: string,
  punchLine: string
}

@Component({
  selector: 'app-fact-form',
  templateUrl: './fact-form.component.html',
  styleUrls: ['./fact-form.component.css']
})
export class FactFormComponent implements OnInit {
  facts$: Observable<Fact[]>

  constructor(private httpClient: HttpClient, private apiUrl: ApiService, private options: ApiService){
    this.facts$ = new Observable
  }

  ngOnInit(){
    this.facts$ = this.httpClient
        .get<Fact[]>(`${this.apiUrl}/customers`)
  }
  fact = new FormControl('')

// public getFacts(){
//     return this.
// }
public getFacts(){
 


};
public submitNewFact(){
  console.log('new fact')
}



 

}
