export class Bill {
  public id: number;
  public description: string;
  public value: number;
  public paymentDate: string;

  constructor(bill: Bill) {
    this.id = bill.id;
    this.description = bill.description;
    this.value = bill.value;
    this.paymentDate = bill.paymentDate;
  }
}
