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
    value: 0,
    type: {
      name: ''
    }
  });

  public datePicker: {
    day: number,
    month: number,
    year: number
  } = {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    };

  private get getDatePicker(): Date {
    return new Date(this.datePicker.year, this.datePicker.month - 1, this.datePicker.day);
  }

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.addBill.emit({
        ...this.bill,
        paymentDate: this.getDatePicker
      });
    }, () => { });
  }
}
