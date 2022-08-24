import { createReducer, on } from '@ngrx/store';
import { Bill } from '../models/bill.model';
import * as fromActions from './../actions/bill.action'

export const initialState = new Array<Bill>();

export const billReducer = createReducer(
  initialState,
  on(fromActions.add, (state, { bill }) => [...state, bill]),
  on(fromActions.remove, (state, { bill }) => state.filter(item => item !== bill))
);
