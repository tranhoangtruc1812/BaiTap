import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hinhchunhat',
  templateUrl: './hinhchunhat.component.html',
  styleUrls: ['./hinhchunhat.component.css']
})
export class HinhchunhatComponent implements OnInit {
  hcn = {
    cd: null,
    cr: null,
    cv:null,
    dt:null
  }
  constructor() { }

  ngOnInit() {
  }
  Tinh(){
    this.hcn.cv = 2*(this.hcn.cd + this.hcn.cr);
    this.hcn.dt = this.hcn.cd * this.hcn.cr;
  }

}
