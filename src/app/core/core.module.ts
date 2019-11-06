import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BootstrapNavbarComponent } from './components/bootstrap-navbar/bootstrap-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    BootstrapNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    BootstrapNavbarComponent
  ]
})
export class CoreModule { }
