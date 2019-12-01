import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ListComponent } from './devedores/list/list.component';
import { EditComponent } from './devedores/edit/edit.component';
import { DevedorService } from './devedores/devedor.service';
import { DevedorDataService } from './devedores/devedor-data.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DevedorHomeComponent } from './devedores/devedor-home/devedor-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    PageNotFoundComponent,
    DevedorHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FontAwesomeModule,
    AppRoutingModule
    
  ],
  providers: [DevedorService, DevedorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
