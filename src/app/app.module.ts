import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
 import { AngularFireAuthModule } from '@angular/fire/compat/auth';
 import { environment } from '../environments/environment';
 import { AngularFireModule } from '@angular/fire/compat';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AlumnosComponent,
    CrearAlumnoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
     AngularFireAuthModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule,
   
  ],
  exports: [
     SharedModule,   
     AngularFireModule,
     AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
