import { Component, OnInit } from '@angular/core';
import { DevedorService } from '../devedor.service';
import { DevedorDataService } from '../devedor-data.service';
import { Devedor } from '../devedor';
import { faSave, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'devedor-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  devedor: Devedor;
  key: string;
  faSave = faSave;
  faCheck = faCheck;

  constructor(private _devedorService: DevedorService, 
              private _devedorDataService: DevedorDataService) { }

  ngOnInit() {
    this.devedor = new Devedor();
    this._devedorDataService.devedorAtual.subscribe(data => {
      if (data.devedor && data.key) {
        this.devedor = new Devedor();
        this.devedor.nome = data.devedor.nome;
        this.devedor.item = data.devedor.item;
        this.devedor.dataEmprestimo = data.devedor.dataEmprestimo;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this._devedorService.update(this.devedor, this.key);
    } else {
      this._devedorService.insert(this.devedor);
    }
    
    this.devedor = new Devedor();
    this.key = null;
  }
}
