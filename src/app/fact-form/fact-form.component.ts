import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fact-form',
  templateUrl: './fact-form.component.html',
  styleUrls: ['./fact-form.component.css']
})
export class FactFormComponent {

  fact = new FormControl('')

  submitNewFact() {
    this.fact.setValue('Fun Fact');
    console.log('log fact')
  }

}
