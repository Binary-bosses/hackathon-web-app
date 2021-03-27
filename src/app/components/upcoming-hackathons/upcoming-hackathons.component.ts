import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-hackathons',
  templateUrl: './upcoming-hackathons.component.html',
  styleUrls: ['./upcoming-hackathons.component.css']
})
export class UpcomingHackathonsComponent implements OnInit {

  constructor() { }
   @Input()
   cdDays = null;
    @Input()
   cdHours = 0;
    @Input()
   cdMins = 0;
    @Input()
   cdSecs = 0;
  ngOnInit(): void {
  }

}
