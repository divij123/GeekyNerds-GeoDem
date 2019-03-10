import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MilkComponent } from './milk/milk.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path:'dashboard' , component: DashboardComponent},
  { path: 'agriculture', component: AgricultureComponent},
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'milk', component: MilkComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'chatbot', component: ChatbotComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
