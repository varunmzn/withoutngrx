import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { UserService } from '../../api-services/user/user.service';


@Directive({
  selector: '[appLoginLogoutButton]'
})


export class LoginLogoutButtonDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
  ) { }

  condition: boolean;

  ngOnInit() {
    if (this.userService.isLoggedIn() && this.condition ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!this.userService.isLoggedIn() && !this.condition ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  @Input() set appLoginLogoutButton(condition: boolean) {
    this.condition = condition;
  }

}