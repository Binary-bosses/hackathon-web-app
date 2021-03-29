import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators,FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Hackathon } from '../hackathon';
import { UniqueAlterEgoValidator } from '../hackname.directive';
import { ApiService } from '../api.service';
import { Team } from '../team';
import { Subscription, Observable, of , interval} from 'rxjs';

@Component({
  selector: 'app-create-hack',
  templateUrl: './create-hack.component.html',
  styleUrls: ['./create-hack.component.css']
})
export class CreateHackComponent implements OnInit {
      data: Hackathon = new Hackathon();
      submitted = false;
      current_date = new Date();
       status = '';

      form = new FormGroup({
        name: new FormControl(''),
        description: new FormControl(''),
        startTime: new FormControl(''),
        endTime: new FormControl(''),
        hackathonPass: new FormControl('', [Validators.required, Validators.minLength(6)]),
        teams:new FormArray([])


      });
  ngOnInit(): void {
   var date = new Date();
   //console.log(this.datePipe.transform(date,"short"));
          this.form = new FormGroup({
               name: new FormControl(null, {
                                                             asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
                                                             updateOn: 'blur'
                                                           }),
               description: new FormControl(''),
               startTime: new FormControl(''),
               endTime: new FormControl(''),
               hackathonPass: new FormControl(''),
               //hackathonPass: new FormControl('', [Validators.required, Validators.minLength(6)]),

               teams:new FormArray([])

             });


  /*

      this.form = new FormGroup({
            'username':new FormControl(),
            'email':new FormControl(),
        'gender':new FormControl('female'),
        'teams':new FormArray([])
      });

      this.form.setValue({
        'userData':{
          'username':'geetha',
          'email':'geetha@gmail.com'
        },
        'gender':'female',
        'teams':[]
      })
      */
  }
  onSubmit(){
    this.data = this.form.value;
    console.log(this.form.value);
    console.log(this.data);
    console.log(this.data.startTime);
    let dateObject = new Date(this.data.startTime);
    let dateObjectEnd = new Date(this.data.endTime);
    console.log('dateonj')
    console.log(dateObject);
    this.data.startTime = dateObject.getTime() / 1000;
    this.data.endTime = dateObjectEnd.getTime() / 1000;

    if( !Number.isFinite(this.data.endTime) || !Number.isFinite(this.data.startTime)){
    this.status = 'dateError';
    }else{
                this.api.addHackathon(this.data)
                .subscribe((res: any) => {
                console.log(res);
                this.status = res.status
                  console.log(res.data);
                  console.log("here");
                  this.form.reset();
                }, err => {
                  console.log(err);
                  this.status = 'error';
                  console.log("error");
                });
    }
    console.log(this.data);



  }
      onReset() {
          this.submitted = false;
          this.form.reset();
          this.status = "";
      }
 get name() { return this.form.get('name'); }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator, private api: ApiService) { }

  getControls() {
    return (this.form.get('teams') as FormArray).controls;
  }

    onAddHobby(){

      const control=new FormControl(null,Validators.required);
      (<FormArray>this.form.get('teams')).push(control);
    }

}
