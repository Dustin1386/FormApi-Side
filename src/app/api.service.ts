import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FactFormComponent } from './fact-form/fact-form.component';



@Injectable({
    providedIn: 'root'
})

export class ApiService {
    public createFact(fact: FactFormComponent){}

    public updateFact(fact: FactFormComponent){}

    public deleteFact(fact: FactFormComponent){}

    public getFact(fact: FactFormComponent){}

    apiUrl: string = 'https://dad-jokes.p.rapidapi.com';

    
}