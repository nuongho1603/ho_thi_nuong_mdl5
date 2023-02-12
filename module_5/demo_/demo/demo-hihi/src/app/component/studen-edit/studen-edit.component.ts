import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Clazz} from "../../model/clazz";
import {StudentService} from "../../service/student.service";
import {ClazzService} from "../../service/clazz.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../model/student";

@Component({
  selector: 'app-studen-edit',
  templateUrl: './studen-edit.component.html',
  styleUrls: ['./studen-edit.component.css']
})
export class StudenEditComponent implements OnInit {
student: Student={};
clazz:Clazz[] =[];
  studentForm: FormGroup = new FormGroup(
    {
      "id":new FormControl(),
    "name": new FormControl(),
    "country": new FormControl(),
    "clazz": new FormControl()}
);

  constructor(private studentService:StudentService,private clazzService:ClazzService,private activatedRoute:ActivatedRoute,private  router:Router) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get('id');
      if (id!=null){
        this.studentService.findById(parseInt(id)).subscribe(data=>{
          this.student=data;
          this.studentForm.patchValue(this.student);
        });
      }
    })
  }

  updateStudent(){
    debugger
  const student = this.studentForm.value;
    this.studentService.updateStudent(student).subscribe(data=>{
      alert("Edit thành công yehh. ");
      this.router.navigateByUrl("/student");
    },error => {
      alert("Bạn đã thất bại! ");
    })
  }
  ngOnInit(): void {
    this.clazzService.getAllClazz().subscribe(data=>{
      this.clazz=data;
  })}


  compareWith(o1: Clazz, o2: Clazz): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
