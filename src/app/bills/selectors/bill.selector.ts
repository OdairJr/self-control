import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Bill } from "../models/bill.model";

const getState = createFeatureSelector<Array<Bill>>('bills');

export const getBills = createSelector(getState, (state: Array<Bill>) => state)
