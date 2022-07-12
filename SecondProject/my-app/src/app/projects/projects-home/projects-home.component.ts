import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  jobTitle: string;

  constructor() {this.jobTitle = "Architect"
                 this.firstName = "william"
                 this.lastName = "wallace"
                 this.phoneNumber = "(201) 748-6000"}

  ngOnInit(): void {
  }

}
