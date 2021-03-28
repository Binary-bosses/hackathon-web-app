import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators,FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Hackathon } from '../hackathon';
import { UniqueAlterEgoValidator } from '../validHackName.directive';
import { ApiService } from '../api.service';
import { Team } from '../team';
import { Subscription, Observable, of , interval} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
       status = '';
       hackName = this.route.snapshot.params.id;
       allTeams: Team[] = [];
               closeDropdownSelection=false;
       submitted = false;
               disabled = false;
               ShowFilter = false;
               limitSelection = false;
               cities: Array<any> = [];
               selectedItems: Array<any> = [];
               dropdownSettings: any = {};
      data: Hackathon = new Hackathon();
      aTeam: Team = new Team();
      form = new FormGroup({
        name: new FormControl(this.route.snapshot.params.id, {asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                               updateOn: 'blur'}),
        description: new FormControl('')

      });


  ngOnInit(): void {
          this.api.getTeams()
          .subscribe((res: any) => {
            this.allTeams = res.data;
            console.log(this.allTeams);
            console.log("all teams");
            this.cities = this.allTeams.map(a => a.name);
          }, err => {
            console.log(err);
            console.log("error");
          });

this.selectedItems = [];
            this.dropdownSettings = {
                singleSelection: true,
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                allowSearchFilter: true,
                closeDropDownOnSelection: this.closeDropdownSelection

            };

                        this.form = new FormGroup({
                             name: new FormControl(this.route.snapshot.params.id, {
                              asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                              updateOn: 'blur'}),
                              description: new FormControl('')

                           });

            /*



                           this.form = this.fb.group({
                                            name: new FormControl(null, {
                                             asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                                             updateOn: 'blur'
                             }),

                                            teams:new FormArray([]),
                               city: [this.selectedItems]
                           });
               */



  }
      onReset() {
          this.submitted = false;
          this.form.reset();
          this.selectedItems = [];
          this.form.get('city')!.setValue([]);
          this.status = "";
      }
 get name() { return this.form.get('name'); }

 onSubmit(){

                   this.data = this.form.value;
                   console.log(this.form.value);
                   console.log(this.data);
                   console.log('selected items');
                    let team = {name: this.selectedItems[0],
                    idea: this.data.description}
                    let teams = [team];

                   this.data.teams = teams;
                   this.data.description = "";
                   console.log(this.data);


                           this.api.register(this.data)
                           .subscribe((res: any) => {
                           console.log(res);
                           this.status = res.status
                             console.log(res.data);
                             console.log("here");
                                       this.form.reset();
                                       this.selectedItems = [];
                                       this.form.get('city')!.setValue([]);
                           }, err => {
                             console.log(err);
                             this.status = 'error';
                             console.log("error");
                           });


 }

  getControls() {
    return (this.form.get('teams') as FormArray).controls;
  }

    onAddHobby(){

      const control=new FormControl(null,Validators.required);
      (<FormArray>this.form.get('teams')).push(control);
    }
        onItemSelect(item: any) {
        this.selectedItems.push(item);
            console.log('onItemSelect', item);
        }
        onSelectAll(items: any) {
            console.log('onSelectAll', items);
        }
        toogleShowFilter() {
            this.ShowFilter = !this.ShowFilter;
            this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
        }

        handleLimitSelection() {
            if (this.limitSelection) {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
            } else {
                this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
            }
        }

        toggleCloseDropdownSelection() {
            this.closeDropdownSelection = !this.closeDropdownSelection;
            this.dropdownSettings = Object.assign({}, this.dropdownSettings,{closeDropDownOnSelection: this.closeDropdownSelection});
        }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator, private route: ActivatedRoute,private api: ApiService, private fb: FormBuilder) { }
}

