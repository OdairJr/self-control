import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove } from '../../actions/bill.action';
import { Bill } from '../../models/bill.model';
import * as fromSelectors from './../../selectors/bill.selector'

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  bills$: Observable<Array<Bill>>;

  constructor(
    private store: Store
  ) {
    this.bills$ = store.select(fromSelectors.getBills);
  }

  ngOnInit(): void {
  }

  async add() {
    const bill = new Bill();
    bill.description = 'churros';
    this.store.dispatch(add({ bill }));
  }

  remove(bill: Bill) {
    this.store.dispatch(remove({ bill }));
  }

}
