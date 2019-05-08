import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from "../wappalyzer/search.service";
import _ from 'lodash'

@Injectable()
export class DataService {

  private resultSource = new BehaviorSubject('');
  currentResult = this.resultSource.asObservable();

  constructor(private search: SearchService) { }

  changeMessage(email: string) {
    // fetch data form wapplazyer
    this.search.listResult(email).subscribe(data => {
      console.log(data)
      data.applications.map((element,val) => {
        return data.applications[val].categories = Object.values(element.categories.shift()).shift() || "no categories";
      });

       data = _(data.applications)
      .groupBy(x => x.categories)
      .map((value, key) => ({categories: key, data: value}))
      .value();
      console.log(data)
      this.resultSource.next(data)
    })

  }
  getMessage() {
    return this.currentResult.subscribe(message => {
      return message;
    });
  }
}