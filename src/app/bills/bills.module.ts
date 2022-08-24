import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { StoreModule } from '@ngrx/store';
import { billReducer } from './reducers/bill.reducer';

@NgModule({
  declarations: [
    BillListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('bills', billReducer)
  ],
  exports: [BillListComponent]
})
export class BillsModule { }
