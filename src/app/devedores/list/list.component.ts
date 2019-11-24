import { Component, OnInit } from '@angular/core';
import { DevedorService } from '../devedor.service';
import { DevedorDataService } from '../devedor-data.service';
import { Observable } from 'rxjs';
import { Devedor } from '../devedor';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'devedor-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  devedores: Observable<any>;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  constructor(private _devedorService: DevedorService, 
              private _devedorDataService: DevedorDataService) { }

  ngOnInit() {
    this.devedores = this._devedorService.getAll();
  }

  delete(key: string) {
    if (confirm('Confirma exclusão?')) {
      this._devedorService.delete(key);
    }
  }

  edit(devedor: Devedor, key: string) {
    this._devedorDataService.obtemDevedor(devedor, key);
  }

}
