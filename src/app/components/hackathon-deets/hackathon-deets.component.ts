import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';
import { TableData } from '../tableData';
import { Subscription, Observable, of,interval } from 'rxjs';

@Component({
  selector: 'app-hackathon-deets',
  templateUrl: './hackathon-deets.component.html',
  styleUrls: ['./hackathon-deets.component.css']
})
export class HackathonDeetsComponent implements OnInit {
    @Input()
    currentTeamNames: string | string[] = [];
    @Input()
    currentTeamIdeas: string | string[] = [];
    teams: Team[] = [];
    teamNames: string[] = [];
    teamIdeas: string[] = [];
    upcomingHackName: string = "";
    tableData: TableData[] = [];
    private subscription = new Subscription();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  console.log('jazzmine');
  console.log(this.upcomingHackName);
  this.subscription = interval(1000).subscribe(x => {
      this.getTimeDifference();
  });

  }
      private getTimeDifference () {
        console.log(this.currentTeamNames);
        if ( this.currentTeamNames.length==0){
        console.log('trying');
        }else{
        this.subscription.unsubscribe();
        console.log("teams");
        console.log(this.currentTeamNames);
        if(!Array.isArray(this.currentTeamNames) && !Array.isArray(this.currentTeamIdeas) ){
          this.teamNames = this.currentTeamNames.split(",");
          this.teamIdeas = this.currentTeamIdeas.split(",");
          this.getTeamData();

        }

        console.log(Array.isArray(this.currentTeamNames));
        console.log(Array.from(this.currentTeamNames));
        console.log(Array.from(this.currentTeamIdeas));
        console.log(this.teamNames);
        console.log(this.teamIdeas);
        }
        //this.subscription.unsubscribe();




      }

      private getTeamData() {
        for (var i = 0; i < this.teamNames.length; i++){
                    let name = this.teamNames[i];
                    console.log(name);
                    let fullName = name.split(' ');
                    let initials = Array.from(name)[0];
                    initials =  initials.toUpperCase();
                    console.log(this.teamNames[i]);
                    let idea = this.teamIdeas[i];
                    let status = false;
                    if(idea != ""){
                        status = true;
                    }
                    let member = "";
                  this.api.getTeamDetails(this.teamNames[i])
                  .subscribe((res: any) => {
                    let data = res.data;
                    console.log(data.members);
                    member = data.members.toString();
                             var obj = {
                               name: name,
                               initials:initials,
                               idea : idea,
                               submitted: status,
                               members:  member
                             };
                             console.log(obj);
                      this.tableData.push(obj);
                    console.log("here");
                  }, err => {
                    console.log(err);
                    console.log("error");
                  });


        }
        console.log(this.tableData);
      }
}
