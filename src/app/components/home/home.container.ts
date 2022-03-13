import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills/bills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {

  bills$: Observable<Array<Bill>> = this.billsService.getBills();

  constructor(
    private readonly billsService: BillsService
  ) { }

  ngOnInit(): void {
  }

  addBill(bill: Bill) {

  }
}
