import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { RemoverComponent } from './views/remover/remover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';
import { GridPesquisaComponent } from './views/grid-pesquisa/grid-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
