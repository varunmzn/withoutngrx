import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data/data.service";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  result:any = this.data.getMessage();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentResult.subscribe(message => this.result = message)
    
  }


}
