import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService { // classe injetável, pode ser injetada em outro components

  constructor(private http: HttpClient) { } // modificador de acesso "private" declara HttpCliente como atributo da classe // injeção de pedendências do HttpCliente
}
