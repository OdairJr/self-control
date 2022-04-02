import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bill } from 'src/app/models/bill.model';
import { BillsService } from 'src/app/services/bills/bills.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.container.html',
  styleUrls: ['./home.container.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {

  public bills$ = this.billsService.getBills();

  constructor(
    private readonly billsService: BillsService,
  ) { }

  ngOnInit(): void {
  }

  addBill(bill: Bill) {
    this.billsService.addBill(bill);
  }
}
