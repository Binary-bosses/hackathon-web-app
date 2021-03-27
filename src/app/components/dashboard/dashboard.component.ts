import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';
import { Subscription, Observable, of , interval} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   isLoadingResults = true;
   allHackathons: Hackathon[] = [];
   prevHackathon = new Hackathon();
   currentHackathon = new Hackathon();
   upcomingHackathon = new Hackathon();
   upcomingHackathonDate = 0;
   currentTimestamp = 0;
   currentIdeas = 0;
   currentTeams: Team[] = [];
   prevWinner = "";
   days = 0;
   prevWinningTeam: Team = new Team();
   gotPrev = false;
   cdDays = 0;
   cdHours = 0;
   cdMins = 0;
   cdSecs = 0;

    private subscription = new Subscription();

    public dateNow = new Date();
    public dDay = new Date('Jan 01 2021 00:00:00');
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    timeDifference = 0;
   constructor(private api: ApiService) { }

   ngOnInit(): void {
        this.api.getHackathons()
        .subscribe((res: any) => {
          this.allHackathons = res.data;
          console.log(this.allHackathons);
          console.log("here");
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          console.log("error");
          this.isLoadingResults = false;
        });

        this.api.getOngoingHackathons()
        .subscribe((res: any) => {
          //this.data = res;
          this.currentHackathon = res.data[0];
          console.log(this.currentHackathon.name);
          console.log("here currentHackathon");
          this.isLoadingResults = false;
                      this.api.getHackathonDetails(this.currentHackathon.name)
                      .subscribe((res: any) => {
                      this.currentHackathon = res.data;
                      this.currentTimestamp = this.currentHackathon.endTime;
                      console.log(this.currentTimestamp);
                      var currentTimeInMilliseconds=Date.now();
                      this.currentTeams = this.currentHackathon.teams;
                      console.log(this.currentTeams);
                      let targetId = this.currentTeams.map(a => a.idea)
                      targetId = targetId.filter(function (el) {
                        return el != "";
                      });
                      this.currentIdeas = targetId.length;
                      console.log(targetId);
                      this.days = (this.currentTimestamp*1000 - currentTimeInMilliseconds) / (1000 * 60 * 60 * 24) | 0


                        this.isLoadingResults = false;
                      }, err => {
                        console.log(err);
                        console.log("error");
                        this.isLoadingResults = false;
                      });
        }, err => {
          console.log(err);
          console.log("error");
          this.isLoadingResults = false;
        });

        this.api.getCompletedHackathons()
        .subscribe((res: any) => {
          //this.data = res;
          this.prevHackathon = res.data[0];
          console.log(this.prevHackathon.name);
          console.log("here completed");
          this.isLoadingResults = false;
                      this.api.getHackathonDetails(this.prevHackathon.name)
                      .subscribe((res: any) => {
                      this.prevHackathon = res.data
                      /*temp fix until api is fixed
                      this.prevHackathon = res.data
                      this.prevWinner = this.prevHackathon.winner
                      */
                        this.prevWinningTeam = this.prevHackathon.teams[0];
                        console.log(this.prevWinningTeam.name);
                        console.log("here deatails");
                        this.isLoadingResults = false;
                      }, err => {
                        console.log(err);
                        console.log("error");
                        this.isLoadingResults = false;
                      });
        }, err => {
          console.log(err);
          console.log("error");
          this.isLoadingResults = false;
        });


        this.api.getUpcomingHackathons()
        .subscribe((res: any) => {
          //this.data = res;
          this.upcomingHackathon = res.data[0];
          console.log(this.upcomingHackathon.name);
          console.log("here upcomingHackathon");
          this.isLoadingResults = false;
                      this.api.getHackathonDetails(this.upcomingHackathon.name)
                      .subscribe((res: any) => {
                      this.upcomingHackathon = res.data;
                      this.upcomingHackathonDate = this.upcomingHackathon.startTime * 1000 ;
                      console.log(this.upcomingHackathonDate);

                          let second = 1000,
                                  minute = second * 60,
                                  hour = minute * 60,
                                  day = hour * 24;

                              let  countDown = this.upcomingHackathonDate;

                                  let now = new Date().getTime();
                                   let   distance = countDown - now;

                                  this.cdDays = Math.floor(distance / (day));
                                  this.cdHours = Math.floor((distance % (day)) / (hour)),
                                  this.cdMins = Math.floor((distance % (hour)) / (minute)),
                                  this.cdSecs = Math.floor((distance % (minute)) / second);
                                  console.log('days');
                                  console.log(this.cdDays);
                                  console.log(this.cdSecs);

                        this.isLoadingResults = false;
                               this.subscription = interval(1000)
                                   .subscribe(x => { this.getTimeDifference(); });
                      }, err => {
                        console.log(err);
                        console.log("error");
                        this.isLoadingResults = false;
                      });
        }, err => {
          console.log(err);
          console.log("error");
          this.isLoadingResults = false;
        });


    }

    private getTimeDifference () {
        this.timeDifference = this.upcomingHackathonDate - new  Date().getTime();
                this.cdSecs = Math.floor((this.timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
                this.cdMins = Math.floor((this.timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
                this.cdHours = Math.floor((this.timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
                this.cdDays = Math.floor((this.timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
          console.log(this.cdSecs + 'secs');
    }


   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}
