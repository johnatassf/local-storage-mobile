import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroContatoPage } from './cadastro-contato.page';

describe('CadastroContatoPage', () => {
  let component: CadastroContatoPage;
  let fixture: ComponentFixture<CadastroContatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroContatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
