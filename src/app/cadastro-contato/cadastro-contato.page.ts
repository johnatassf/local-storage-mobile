import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Contato } from './contato-model';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EnumAction } from '../home/enum-action';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.page.html',
  styleUrls: ['./cadastro-contato.page.scss'],
})
export class CadastroContatoPage implements OnInit {


  private form: FormGroup;
  public contatos: Contato[] = [];
  id: number;
  title: string
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, private route: ActivatedRoute) {

    this.contatos = JSON.parse(localStorage.getItem('contatos'));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });

    if (this.route.snapshot.data['action'] === EnumAction.Update) {
      this.route.params.subscribe(params => {
        this.id = +params['id'];
        this.loadContato(this.id);
      });

      this.title = 'Atualizar Contato';
    }else{
      this.title = 'Cadastrar Contato';
    }
    

  }

  salvarValores() {

    const id = this.contatos.length == null ? 1 : this.contatos.length + 1;
    
    if (this.route.snapshot.data['action'] === EnumAction.Update) {
      this.contatos = this.contatos.filter(c =>  c.id !== this.id);

      this.contatos.push({ id: this.id, nome: this.form.value.nome, telefone: this.form.value.telefone });

      this.navCtrl.navigateRoot('home');
    } else {
      this.contatos.push({ id, nome: this.form.value.nome, telefone: this.form.value.telefone });
    }
    
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
    this.goToHome();
  }

    loadContato(id: number) {
      var contato = this.contatos.find(c => c.id === id);

      this.form.controls.nome.patchValue(contato.nome);
      this.form.controls.telefone.patchValue(contato.telefone);
    }

    goToHome(){
      this.navCtrl.navigateRoot('home');
    }

  }
