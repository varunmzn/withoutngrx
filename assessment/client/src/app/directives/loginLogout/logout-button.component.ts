import {  Input,  Component,  ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../../api-services/user/user.service';

@Component({
  selector: 'app-logout-button',
  template: `
    <div class="container">
      <input class="button" id="clickMe" type="button" value="{{btnText}}" (click)="logout()" />
      </div>
  `,
  styles: [
    `  
  .button{
   
  } `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class LogoutButtonComponent  {
  @Input() btnText = 'logout';
  constructor(private userService : UserService, private router:Router) {}


  logout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}





       