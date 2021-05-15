import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar/';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridPesquisaComponent } from './views/grid-pesquisa/grid-pesquisa.component';
import { HomeComponent } from './views/home/home.component';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';
import { RemoverComponent } from './views/remover/remover.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisarComponent,
    GridPesquisaComponent,
    RemoverComponent,
    CadastrarComponent,
    
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
    MatTableModule,
    MatPaginatorModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
