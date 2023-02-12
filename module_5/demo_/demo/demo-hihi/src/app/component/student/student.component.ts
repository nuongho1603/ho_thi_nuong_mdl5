import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[] = [];
  temp: Student = {};

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe(data => {
      this.studentList = data;
    })
  }

  delete(id: any) {
    if (id != null) {
      this.studentService.delete(id).subscribe(data => {
        alert("Thành công việc xóa 1 học sinh. ");
        this.ngOnInit();
      });
    }
  }
}
