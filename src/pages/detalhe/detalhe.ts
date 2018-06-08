import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';


/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
  public prod = '';
  public codigo = '';

  constructor(
    public navCtrl: NavController, 
    public ps : ProdutoService,
    public navParams: NavParams) {
  }

  produto : any = { };

  detalharProduto(codigoProduto){
      this.ps.obterProduto(codigoProduto).subscribe(
      dados => this.produto = dados,
      erro => console.log(erro));
  }

  voltar(){
    this.navCtrl.goToRoot({});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
    let codigo = this.navParams.get('codigo');
    console.log('detalhe: ' + codigo);
    this.detalharProduto(codigo);
  }

}
