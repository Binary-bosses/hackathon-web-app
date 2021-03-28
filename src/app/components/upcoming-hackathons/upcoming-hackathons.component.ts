import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';

@Component({
  selector: 'app-upcoming-hackathons',
  templateUrl: './upcoming-hackathons.component.html',
  styleUrls: ['./upcoming-hackathons.component.css']
})
export class UpcomingHackathonsComponent implements OnInit {

  constructor(private api: ApiService) { }
   @Input()
   //cdDays = 0;
   cdDays: string | number = 0;
    @Input()
   cdHours : string | number = 0;
    @Input()
   cdMins : string | number = 0;
    @Input()
   cdSecs: string | number = 0;
   upcomingHackathons: Hackathon[] = [];


  ngOnInit(): void {


          this.api.getUpcomingHackathons()
          .subscribe((res: any) => {
            //this.data = res;
            this.upcomingHackathons = res.data;
            console.log(this.upcomingHackathons);
          }, err => {
            console.log(err);
            console.log("error");
          });
  console.log(this.upcomingHackathons);
  }

}
