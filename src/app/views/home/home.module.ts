import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
    
  ]
})
export class HomeModule { }
