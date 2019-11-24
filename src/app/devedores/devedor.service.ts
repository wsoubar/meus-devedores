import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Devedor } from './devedor';
import { map } from 'rxjs/operators';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DevedorService {

  constructor(private _afd: AngularFireDatabase) { }

  insert(devedor: Devedor){
    //devedor.dataEmprestimo
    this._afd.list("devedores").push(devedor)
      .then((data: any) => {
        console.log(data.key);
      });
  }

  update (devedor: Devedor, key: string){
    this._afd.list("devedores").update(key, devedor);
  } 

  delete(key: string) {
    this._afd.object(`devedores/${key}`).remove()
      .then(() => {
        console.log(key + " removido com sucesso");
      });
  }

  getAll() {
    return this._afd.list("devedores")
      .snapshotChanges()
      .pipe(
        map(chances => {
          return chances.map(data=> ({key: data.payload.key, ...data.payload.val() }));
        })
      );
  }

}
