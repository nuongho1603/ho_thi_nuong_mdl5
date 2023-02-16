import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
URL_STU = 'http://localhost:3000/students';
  constructor(private httpClient: HttpClient) { }

getAll() {
    return this.httpClient.get<Student[]>(this.URL_STU);
}

  findById(id: number) {
return this.httpClient.get<Student>(this.URL_STU + '/' + id);
  }

  update(student: Student) {
return this.httpClient.patch(this.URL_STU + '/' + student.id, student);
  }

  delete(id: number) {
    return this.httpClient.delete<Student>(this.URL_STU + '/' + id);
  }

  save(student: Student) {
    return this.httpClient.post(this.URL_STU, student);
  }
}
