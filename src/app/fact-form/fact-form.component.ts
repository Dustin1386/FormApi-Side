import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
export class FactFormComponent {
 factForm = new FormGroup({
   firstFact: new FormControl(''),
   secondFact: new FormControl('')
 })
 onSubmit(){
   console.log('fuck')
 }



 

}
