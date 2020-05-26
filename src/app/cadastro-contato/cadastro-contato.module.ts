import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroContatoPageRoutingModule } from './cadastro-contato-routing.module';

import { CadastroContatoPage } from './cadastro-contato.page';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroContatoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CadastroContatoPage],
  providers:[NativeStorage]
})
export class CadastroContatoPageModule {}
