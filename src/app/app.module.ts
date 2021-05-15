import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatIconModule ,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
