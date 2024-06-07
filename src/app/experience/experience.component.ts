import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  timeLine = [{ year: 'Smartail Pvt Ltd', time:'Jun 2023 - Nov 2023' ,loc:'Chennai', detail: 'Developed a status tracker website to monitor the lifecycle of question papers, including receipt, correction, and dispatch to schools.Implemented features to assign deadlines and designate personnel for correcting and reviewing answer papers.Generated comprehensive reports on a daily and monthly basis to provide insights into workflow and performance metrics.',tools:'Tools Used : Angular , Java(Rest APIs) , MongoDB' },
    ]
}
