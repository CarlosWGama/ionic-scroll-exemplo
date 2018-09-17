import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConteudoProvider } from '../../providers/conteudo/conteudo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  private conteudos: any[] = [];
  private quantidade: number = 4; //De quantos em quantos elementos retornar
  private comecando = 0;
  private possuiMais = true; //Checa se ainda tem itens para exibir o botão 

  constructor(public navCtrl: NavController, private conteudoProvider: ConteudoProvider) {
    this.buscarMais();
  }

  buscarMais() {
    //Solicite ao provider buscar os novos itens com um limite de resultados e o junte (concatene) com os que já buscou antes
    this.conteudos = this.conteudos.concat(this.conteudoProvider.getConteudos(this.quantidade, this.comecando));
    //Cada vez que buscar, atualize a variavel comecando para ela começar a buscar da próxima vez pelos próximos;
    this.comecando += this.quantidade;
    //Cheque se ainda tem mais itens
    this.possuiMais  = (this.conteudoProvider.getTotal() > this.comecando);
  }

}
