import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string = "william";
  lastName: string = "wallace";
  phoneNumber: string = "(201) 748-6000";

  value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
