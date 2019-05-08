import {  Input,  Component,  ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router'
import { UserService } from '../../api-services/user/user.service';
@Component({
  selector: 'app-login-button',
  template: `
    <div class="container">
        <u>
                <a href="javascript:void(0)" class="btn btn-default" (click)="login()">Sign in</a>
            </u>or
            <u>
                <a href="javascript:void(0)" class="btn btn-default" (click)="signup()">Sign up</a>
            </u>
      </div>
  `,
  styles: [
    `  
  .button{
   
  } `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class LoginButtonComponent  {
  @Input() btnText = 'login';
  constructor(private userService : UserService, private router:Router) {}

  login() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
  signup() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/signup');
  }
}
