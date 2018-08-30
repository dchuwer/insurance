import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Factory } from '../Factory';
import { FactorymodelService } from '../factorymodel.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent  implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isEditable = true;

  //startdate : Date;
  factory : string;
  alarm = false;
  datestart: Date;
  factories : Array<any>;
  years_model : Array<any>;
  years : Array<any>;
  models : Array<any>;
  filtermodels : Array<any>;
  modelcars :  Array<any>;
  yearFactory : number;
  minDate = new Date();
  maxDateBorn = new Date()
  yearLicenses = [];
  
  //maxDate = new Date(2019, 0, 1);

  constructor(private _formBuilder: FormBuilder, private factorymodel : FactorymodelService) {

    this.factorymodel.factoriesUpdated.subscribe( (data) => {
     this.factories = data;
     console.log(data);
    })

    this.factorymodel.yearsUpdated.subscribe( (data) => {
    
    this.years_model = data;
    this.years = this.filterUnique(data, 'year');
    })

    this.maxDateBorn.setFullYear( this.maxDateBorn.getFullYear() - 18 );

   
    
  }

  filterUnique(data, key){
    var resArr = [];
    data.filter(function(item){
      var i = resArr.findIndex(x => x[key] == item[key]);
      if(i <= -1){
        resArr.push({year: item[key]});
      }
      return null;
    });
   
    return resArr;

  }

  getYears(factory) {
   
    this.factorymodel.getYears(factory.value)

  }

  getModels(year) {
    //console.log(this.firstFormGroup.get('startdate').value);
    this.yearFactory = year.value;
    this.models = this.years_model.filter( models => { return models.year == year.value})
    var resArr = [];
    this.models.filter(function(item){
      var i = resArr.findIndex(x => x['modelName'] == item['modelcar']['modelName']);
      if(i <= -1){
        resArr.push({ modelName : item['modelcar']['modelName'], 
                      modelDetails: item['modelcar']['modelDetails']});
      }
     // return null;
    });
    this.filtermodels = resArr;
   
    
  }

  getModelsDistinct(model){

    this.modelcars = this.models.filter( models => { return ( (models['modelcar']['modelName'] == model.value) && 
    (models['year'] == this.yearFactory) )})
    
  }

  getAlarm($event){
    this.alarm = true;
    
  }

  getYearsLicense($event){
    this.yearLicenses = ['פחות משנה', 'שנה']
    let yearMinLicense = $event.value.getFullYear() + 18;
    let countYear = 2;
    while (yearMinLicense <= this.minDate.getFullYear()){
      if (countYear == 2)
        this.yearLicenses.push('שנתיים');
      else
        this.yearLicenses.push(countYear + ' שנים ');
      countYear ++;
      yearMinLicense ++;
    }
      
    

  }

  form1() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
} 


  ngOnInit() {
    

    this.firstFormGroup = this._formBuilder.group({
      datestart: ['', Validators.required]
      
    });
    this.secondFormGroup = this._formBuilder.group({
       factory: ['', Validators.required],
       year: ['', Validators.required],
       model: ['', Validators.required],
       modelcar: ['', Validators.required],
       alarm: ['', Validators.required],
       alarmeye: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      numberDriver: ['', Validators.required],
      genderDriver: ['', Validators.required],
      dateDriverBorn: ['', Validators.required],
      yearsLicense: ['', Validators.required]
   });

   this.fourthFormGroup = this._formBuilder.group({
    avarBituach: ['', Validators.required],
    avarBefore1: ['', Validators.required],
    avarBefore2: ['', Validators.required],
    avarBefore3: ['', Validators.required],
    tviot: ['', Validators.required],
    avarTviot: ['', Validators.required],
    tviotGuf: ['', Validators.required],
    avarTviotGuf: ['', Validators.required]
    
 });
  }
}
