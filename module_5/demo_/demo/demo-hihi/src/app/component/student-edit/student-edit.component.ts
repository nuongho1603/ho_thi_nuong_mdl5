import {Component, OnInit} from '@angular/core';
import {Clazz} from '../../model/clazz';
import {FormControl, FormGroup} from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {ClazzService} from '../../service/clazz.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Student} from '../../model/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    story: new FormControl(),
    clazz: new FormControl(),
  });
  clazz: Clazz[] = [];
  student: Student = {};

  constructor(private studentService: StudentService, private clazzService: ClazzService, private activatedRoute: ActivatedRoute, private  router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix no-shadowed-variable
        this.studentService.findById(parseInt(id)).subscribe(data => {
          this.student = data;
          this.studentForm.patchValue(this.student);
        });
      }
    });
  }

  ngOnInit(): void {
    this.clazzService.getAll().subscribe(data => {
      this.clazz = data;
    });
  }

  update() {
    const student = this.studentForm.value;
    this.studentService.update(student).subscribe(data => {
      alert('successful update.');
      this.router.navigateByUrl('/student');
    });
  }
}
