import { BaseModel } from "./base/base.model";

export class Type extends BaseModel {
  public name: string;


  constructor(name: string) {
    super();

    this.name = name;
  }
}

export class Bill extends BaseModel {
  public type: Type;
  public description: string;
  public value: number;
  public paymentDate: Date;

  constructor(bill: Bill) {
    super();

    this.id = bill.id;
    this.type = bill.type;
    this.description = bill.description;
    this.value = bill.value;
    this.paymentDate = bill.paymentDate;
  }
}
