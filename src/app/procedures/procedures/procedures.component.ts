import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger;
    alert("I am Procedures Module");
    console.log("I am Procedures Module");
  }

}
