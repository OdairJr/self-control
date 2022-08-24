import { Action, createAction, props } from '@ngrx/store';
import { Bill } from '../models/bill.model';

export const add = createAction('[Bill Component] Add', props<{ bill: Bill}>());
export const remove = createAction('[Bill Component] Remove', props<{ bill: Bill}>());
