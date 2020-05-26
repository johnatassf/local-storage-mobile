import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroContatoPage } from './cadastro-contato.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroContatoPageRoutingModule {}
