import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { DataListComponent } from './data-list/data-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


import { ResultListComponent } from './result-list/result-list.component';
import { RightContentComponent } from './right-content/right-content.component';
//Services
import { DataService } from './services/data/data.service';
import { SearchService } from './services/wappalyzer/search.service';


import { AppRoutingModule } from './app-routing.module';


import {LayoutService} from './services/layout/layout.service'
import { RoutingService } from './services/routing/routing.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

// Directives
import { LoginLogoutButtonDirective } from './directives/loginLogout/login-logout-button.directive';
import { LoginButtonComponent } from './directives/loginLogout/login-button.component';
import { LogoutButtonComponent } from './directives/loginLogout/logout-button.component';
import { SubscriberComponent } from './directives/subscriber/subscriber.component';



@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    HomeComponent,
    ResultListComponent,
    RightContentComponent,
    UserComponent,
    UserProfileComponent,
    LoginLogoutButtonDirective,
    LoginButtonComponent,
    LogoutButtonComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,AppBootstrapModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,DataService,SearchService,LayoutService,RoutingService],
  entryComponents: [LoginButtonComponent,LogoutButtonComponent,SubscriberComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const logout = createCustomElement(LogoutButtonComponent, {
      injector
    });
    customElements.define('app-logout-button',logout);
  }

  ngDoBootstrap() {}
}
