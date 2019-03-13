import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import angular materials
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

//Services
import { FileUploadService } from './services/file-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    //NoopAnimationsModule,
    FormsModule,
    //ReactiveFormsModule,
    //MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    FileUploadService
    //Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
