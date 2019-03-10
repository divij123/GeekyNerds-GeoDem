import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './serivce/sidebar.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './service/auth.service';
import { MapComponent } from './map/map.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MilkComponent } from './milk/milk.component';
import { HospitalComponent } from './hospital/hospital.component';
import { CardComponent } from './card/card.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    MapComponent,
    AgricultureComponent,
    RestaurantComponent,
    MilkComponent,
    HospitalComponent,
    CardComponent,
    ChatbotComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule,
    AngularFireAuthModule,
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
