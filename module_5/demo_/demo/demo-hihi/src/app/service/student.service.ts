import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
URL_STUDENT ="http://localhost:3000/students";
  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Student[]>(this.URL_STUDENT);
  }

  findById(id:number) {
    return this.httpClient.get<Student>(this.URL_STUDENT+"/"+id);
  }

  updateStudent(student: Student) {
    return this.httpClient.patch(this.URL_STUDENT + "/" + student.id, student);
  }

  delete(id: any) {
    return this.httpClient.delete<Student>(this.URL_STUDENT+"/" +id);
  }
}
