import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ICredentials } from './i-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _login: WritableSignal<boolean> = signal<boolean>(false);
  loginOK: Signal<boolean> = this._login.asReadonly();

  private _errorFeedback: WritableSignal<boolean> = signal(false);
  errorFeedback: Signal<boolean> = this._errorFeedback.asReadonly();
  constructor() { }

  //Sistema fake di login

  login(credenziali: ICredentials) {
    if ((credenziali.username == 'pippo' && credenziali.password == 'cisco')) {
      
      this._login.set(true);
      this._errorFeedback.set(false);
    
    }
    else{

    }
  }


}
