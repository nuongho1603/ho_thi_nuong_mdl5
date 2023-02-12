import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Clazz} from "../model/clazz";

@Injectable({
  providedIn: 'root'
})
export class ClazzService {

  constructor(private httpClient:HttpClient) { }

  getAllClazz() {
    return this.httpClient.get<Clazz[]>("  http://localhost:3000/clazz");
  }
}
