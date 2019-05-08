import { Component ,OnInit} from '@angular/core';
import {LayoutService} from './services/layout/layout.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public layoutName: string;

  constructor( private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: any) => {
      this.layoutName = value.layoutName;
        });
  }
}