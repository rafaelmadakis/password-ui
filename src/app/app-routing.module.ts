import { HomeComponent } from './views/home/home.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { RemoverComponent } from './views/remover/remover.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarComponent } from './views/pesquisar/pesquisar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
