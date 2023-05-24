import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOGINFORMComponent } from './loginform/loginform.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MENUComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SIDENAVComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { SALESComponent } from './sales/sales.component';
import {MatTableModule} from '@angular/material/table';







@NgModule({
  declarations: [
    AppComponent,
    LOGINFORMComponent,
    DashboardComponent,
    MENUComponent,
    SIDENAVComponent,
    SALESComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
