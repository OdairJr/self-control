import { BaseModel } from "src/app/models/base/base.model";

export class Type extends BaseModel {
  public name: string;


  constructor(name: string) {
    super();

    this.name = name;
  }
}

export class Bill extends BaseModel {
  public title?: string;
  public description?: string;
  public images?: string[];
  public type?: Type;
  public value?: number;
  public paymentDate?: Date;

  constructor(bill?: Bill) {
    super()
      this.title = bill?.title;
      this.type = bill?.type;
      this.description = bill?.description;
      this.value = bill?.value;
      this.images = bill?.images;
      this.paymentDate = bill?.paymentDate;
  }
}
