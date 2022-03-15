import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill.model';

@Component({
  selector: 'app-bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BillTableComponent implements OnInit {

  @Input() public bills: Array<Bill> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
