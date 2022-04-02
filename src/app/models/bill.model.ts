import { BaseModel } from "./base/base.model";

export class Bill extends BaseModel {
  public description: string;
  public value: number;
  public paymentDate: Date;

  constructor(bill: Bill) {
    super();

    this.id = bill.id;
    this.description = bill.description;
    this.value = bill.value;
    this.paymentDate = bill.paymentDate;
  }
}
