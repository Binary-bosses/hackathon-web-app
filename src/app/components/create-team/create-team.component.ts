import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators,FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Hackathon } from '../hackathon';
import { UniqueAlterEgoValidator } from '../teamname.directive';
import { ApiService } from '../api.service';
import { Team } from '../team';
import { Subscription, Observable, of , interval} from 'rxjs';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
       status = '';
       submitted = false;
               disabled = false;
               ShowFilter = false;
               limitSelection = false;
               cities: Array<any> = [];
               selectedItems: Array<any> = [];
               dropdownSettings: any = {};
      data: Team = new Team();
      form = new FormGroup({
        name: new FormControl('', {asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                               updateOn: 'blur'})

      });


  ngOnInit(): void {
              this.cities = [
                  { item_id: 'Jazzmine', item_text: 'jazwhite' },
                  { item_id: 'Jayjit', item_text: 'jabasu' },
                  { item_id: 'Anil k', item_text: 'akairamk' },
                  { item_id: 'Philip', item_text: 'phwhitin' },
                  { item_id: 'Deepa', item_text: 'debharti' },
                  { item_id: 'Sandya', item_text: 'sandsiva' },
                  { item_id: 'Virat', item_text: 'visardan' }
              ];
this.selectedItems = [];
            this.dropdownSettings = {
                singleSelection: false,
                idField: 'item_text',
                textField: 'item_id',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 6,
                allowSearchFilter: this.ShowFilter

            };

                        this.form = new FormGroup({
                             name: new FormControl(null, {
                              asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                              updateOn: 'blur'
              })

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
                   this.data.members = this.selectedItems.map(a => a.item_text);
                   console.log(this.data);

                           this.api.addTeam(this.data)
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



  constructor(private alterEgoValidator: UniqueAlterEgoValidator, private api: ApiService, private fb: FormBuilder) { }
}
