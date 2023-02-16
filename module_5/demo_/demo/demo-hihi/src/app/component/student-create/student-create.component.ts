import {Component, OnInit} from '@angular/core';
import {Clazz} from '../../model/clazz';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';
import {Router} from '@angular/router';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    story: new FormControl('', Validators.required),
    clazz: new FormControl(),
  });
  clazz: Clazz [] = [];
  student: Student[] = [];

  constructor(private studentService: StudentService, private clazzService: ClazzService, private router: Router) {
    this.studentService.getAll().subscribe(data => {
      this.student = data;
    });
    this.clazzService.getAll().subscribe(data => {
      this.clazz = data;
    });
  }

  ngOnInit(): void {
  }

  save() {
    if (this.studentForm.valid) {
      // tslint:disable-next-line:radix
      this.studentForm.value.id = parseInt(this.studentForm.value.id);
      this.studentService.save(this.studentForm.value).subscribe(data => {
        alert('successful add new student');
        this.router.navigateByUrl('/student');
      });
    }
  }
}
