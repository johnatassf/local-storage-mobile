import { Component, NgZone, OnInit } from '@angular/core';
import { Contato } from '../cadastro-contato/contato-model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contatos: Contato[] = [];
  constructor(private route: NavController) {
   
  }
  
  ionViewWillEnter(){
    this.contatos = JSON.parse(localStorage.getItem('contatos'));
  }

  public removerContato(contato: Contato) {
    console.log(contato);
    this.contatos = this.contatos.filter(c => c !== contato);
    
    this.saveLocalStorage(this.contatos);
  }
  public updateContact(contato: Contato) {
    this.route.navigateForward(`cadastro-contato/${contato.id}`);
  }

  saveLocalStorage(contato: Contato[]){
    localStorage.setItem('contatos', JSON.stringify(contato));
  }

}
