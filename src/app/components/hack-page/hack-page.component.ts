import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';

@Component({
  selector: 'app-hack-page',
  templateUrl: './hack-page.component.html',
  styleUrls: ['./hack-page.component.css']
})
export class HackPageComponent implements OnInit {
isLoadingResults = true;
currentHackathon = new Hackathon();

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }


  ngOnInit(): void {
                      this.api.getHackathonDetails(this.route.snapshot.params.id)
                      .subscribe((res: any) => {
                      this.currentHackathon = res.data;

                        this.isLoadingResults = false;
                      }, err => {
                        console.log(err);
                        console.log("error");
                        this.isLoadingResults = false;
                      });


  }

}
