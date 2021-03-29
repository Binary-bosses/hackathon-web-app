import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';
import { TableData } from '../tableData';
import { Subscription, Observable, of,interval } from 'rxjs';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.css']
})
export class NavContentComponent implements OnInit {
    @Input()
    currentTeamNames: string | string[] = [];
    @Input()
    currentTeamIdeas: string | string[] = [];
    teams: Team[] = [];
    hackathons: Hackathon[] = [];
    teamNames: string[] = [];
    teamIdeas: string[] = [];
    upcomingHackName: string = "";
    tableData: TableData[] = [];
    private subscription = new Subscription();
    time = this.route.snapshot.params.id;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
this.loadData(this.time);

this.router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                                this.time = this.route.snapshot.params.id;
                                console.log(this.time);
                                this.loadData(this.time);
            }

            if (event instanceof NavigationEnd) {

            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
            }
        });

  }

  loadData(timeswitch: string){
    switch (timeswitch) {
        case 'upcoming':
              this.api.getUpcomingHackathons()
              .subscribe((res: any) => {
                this.hackathons = res.data;
                console.log(this.hackathons);
                console.log("all upcoming");
                this.time = 'Upcoming';
              }, err => {
                console.log(err);
                console.log("error");
              });
            break;

        case 'current':
              this.api.getOngoingHackathons()
              .subscribe((res: any) => {
                this.hackathons = res.data;
                console.log(this.hackathons);
                console.log("all current");
                this.time = 'Current';
              }, err => {
                console.log(err);
                console.log("error");
              });
            break;
        case 'previous':
              this.api.getCompletedHackathons()
              .subscribe((res: any) => {
                this.hackathons = res.data;
                console.log(this.hackathons);
                this.time = 'Previous';
                console.log("all prev");
              }, err => {
                console.log(err);
                console.log("error");
              });
            break;
        case 'all':
              this.api.getHackathons()
              .subscribe((res: any) => {
                this.hackathons = res.data;
                console.log(this.hackathons);
                this.time = 'All';
                console.log("all");
              }, err => {
                console.log(err);
                console.log("error");
              });
              break;
    }

  }


}
