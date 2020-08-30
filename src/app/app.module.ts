import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Dependency Injection
// Adding Dependecy Injection import for the shared module
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';

// Importing Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Importing Components
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    EmployeeDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
