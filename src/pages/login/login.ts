import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';

@Component({
  templateUrl: 'login.html'
})

export class LoginPage {
  public email : string = '';
  public password : string = '';
  public name : string = '';
  public birthday : string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth : Auth,
    public user : User,
    public loadingCtrl : LoadingController,
    public toastCtrl : ToastController,
  ) {
    this.initProfile();
  }

  private initProfile(){
    if(this.auth.isAuthenticated()){
      this.name = this.user.get('name', '');
      this.birthday = this.user.get('birthday','');
    }
  }

  public register(){
    let details : UserDetails = {
    'email' : this.email,
    'password': this.password
    };

    let loader = this.loadingCtrl.create({
      content: 'Inscrevendo Usuário...'
    });

    loader.present();

    this.auth.signup(details).then(
      () => {
        console.log('O usuário está registrando agora');
        console.log(this.user);
        loader.dismiss();
        return this.auth.login('basic', {
          'email': this.email,
          'password': this.password
        })
      },
      (err: IDetailedError<string[]>) =>{
        loader.dismiss();

        console.log(err.details);

        for (let e of err.details){
          if (e == 'conflict_email'){
            alert('O email já está sendo usado por outro usuário');
          }
          else{
            alert('Erro ao criar o usuário');
          }
        }
      }
    )
  }
  
  public login(){
    let details : UserDetails = {
      'email' : this.email,
      'password': this.password
    };

    let loader = this.loadingCtrl.create({
      content: 'Autenticando usuário...'
    });
    loader.present();

    this.auth.login('basic', details).then(
      (data) => {
        console.log('Autenticação finalizada');
        this.initProfile();
        loader.dismiss();
        alert('Erro de autenticação');
      }
    );
  }

  public save(){
    let toast = this.toastCtrl.create({
      message: 'Perfil do usuário salvo com sucesso',
      position: 'button',
      duration: 3000
    });
    toast.present();

    this.user.set('name', this.name);
    this.user.set('birthday', this.birthday);
    this.user.save();
  }

  public logout(){
    this.auth.logout();
    this.email = '';
    this.password = '';
    this.name = '';
    this.birthday = '';
  }
}
