import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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

  displayStyle = "none";

  openPopup() {
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal!.addEventListener('shown.bs.modal', function () {
      myInput!.focus()
    })
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
