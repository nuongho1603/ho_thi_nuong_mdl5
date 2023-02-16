import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  stud: Student = {};

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe(data => {
      console.log(data);
      this.studentList = data;
    });
  }

  delete(id: number) {
    if (id != null) {
      this.studentService.delete(id).subscribe(data => {
        this.ngOnInit();
      });
    }
  }
}
