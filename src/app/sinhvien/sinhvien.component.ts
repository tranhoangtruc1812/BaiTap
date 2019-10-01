import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  stu = {
    name: null,
    date: null,
    gender: null,
    point: 0,
    grade: null
  }

  constructor() { }

  ngOnInit() {
  }
  XepLoai() {
    if (this.stu.point < 5) {
      this.stu.grade = 'rớt';
  
    }
    else {
      this.stu.grade = 'đậu';
      
      
    }
    return this.stu.grade

  }
}
