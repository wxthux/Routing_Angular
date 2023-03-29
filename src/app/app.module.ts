import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'location', component: LocationComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    LocationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
