import { Component, EventEmitter, NgZone, OnInit, Output, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bill } from 'src/app/models/bill.model';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  @Output() addBill: EventEmitter<Bill> = new EventEmitter();

  public bill: Bill = new Bill({
    description: '',
    paymentDate: new Date(),
    value: 0
  });

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.addBill.emit(this.bill);
    }, () => {});
  }
}
