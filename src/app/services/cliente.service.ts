import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ClienteModel } from '../modelos/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private db: AngularFireDatabase
  ) {

  }

  salvar(cliente: ClienteModel): void {
    this.db.list('clientes').push(cliente);
  }
}
