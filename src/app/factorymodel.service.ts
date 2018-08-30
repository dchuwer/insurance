import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factory } from './Factory';
import { Subject, Observable } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class FactorymodelService {

  public factoriesUpdated : Observable<any>;
  public factoriesSubject: Subject<any>;

  public yearsUpdated : Observable<any>;
  public yearsSubject: Subject<any>;
  //factories : Factory;
  constructor(private http: HttpClient,) {
    this.factoriesSubject = new Subject<any>();
    this.factoriesUpdated = this.factoriesSubject.asObservable();

    this.yearsSubject = new Subject<any>();
    this.yearsUpdated = this.yearsSubject.asObservable();
    this.getFactories();
   }

  getFactories()  {
    this.http.get('factoriesApi/').subscribe(data => {
    //this.factories = data;
   
    this.factoriesSubject.next(data)
     })
  }

  getYears(factoryId){
    this.http.get('year_modelsApi/' + factoryId).subscribe(data => {
      console.log(data)
    this.yearsSubject.next(data)
       })
  }
}
