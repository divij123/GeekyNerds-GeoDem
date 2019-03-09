import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MapComponent } from './map/map.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MilkComponent } from './milk/milk.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'dashboard' , component: DashboardComponent},
  { path: 'map', component: MapComponent},
  { path: 'agriculture', component: AgricultureComponent},
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'milk', component: MilkComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
