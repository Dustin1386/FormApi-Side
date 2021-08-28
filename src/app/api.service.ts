import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class ApiService {
    apiUrl: string = 'https://api.fungenerators.com';

    constructor(private httpClient: HttpClient){}
}