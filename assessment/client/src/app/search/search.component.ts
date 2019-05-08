import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from "../services/data/data.service";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchClass: string;
  message:string;


  searchForm = new FormGroup({
    searchText: new FormControl('')  
  });

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentResult.subscribe(message => this.message = message)
  }

  onSubmit() {
    this.data.changeMessage(this.searchForm.value.searchText)
  }

}
