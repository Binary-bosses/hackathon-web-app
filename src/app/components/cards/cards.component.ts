import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Hackathon } from '../hackathon';
import { Team } from '../team';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

    @Input()
    customTitle: string = "";

   isLoadingResults = true;
   @Input()
   allHackathons = "";
   @Input()
   days = "";
   @Input()
   prevWinningTeam = "";
   @Input()
   currentIdeas = "";
      @Input()
      prevHack = "";
      @Input()
      currentHack = "";

   ngOnInit(): void {
   }

}
