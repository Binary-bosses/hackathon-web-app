import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';
import { TableData } from '../tableData';
import { Subscription, Observable, of,interval } from 'rxjs';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';

@Component({
  selector: 'app-nav-content-current',
  templateUrl: './nav-content-current.component.html',
  styleUrls: ['./nav-content-current.component.css']
})
export class NavContentCurrentComponent implements OnInit {

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

  }

}
