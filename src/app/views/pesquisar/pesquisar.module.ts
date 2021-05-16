import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GridPesquisaComponent } from './../grid-pesquisa/grid-pesquisa.component';
import { PesquisarComponent } from './pesquisar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';



@NgModule({
  declarations: [
    PesquisarComponent,
    GridPesquisaComponent
  ],
  exports: [
    PesquisarComponent,
    GridPesquisaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserModule

    

  ]
})
export class PesquisarModule { }
