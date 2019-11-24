import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Devedor } from './devedor';

@Injectable({
  providedIn: 'root'
})
export class DevedorDataService {

  private devedorSource = new BehaviorSubject({devedor: null, key: ''});
  devedorAtual = this.devedorSource.asObservable();

  constructor() { }

  obtemDevedor(devedor: Devedor, key: string) {
    this.devedorSource.next({devedor: devedor, key: key});
  }
}
