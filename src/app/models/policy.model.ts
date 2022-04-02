import { BaseModel } from "./base/base.model";

export class Policy extends BaseModel {
  policyNumber: string;
  creationDate: Date;
  effectiveDate: Date;
  expireDate: Date;
  paymentOption: string;
  policyAmount: number;
  extraInfo: string;

  constructor(policy: Policy) {
    super();

    this.id = policy.id;
    this.policyNumber = policy.policyNumber;
    this.creationDate = policy.creationDate;
    this.effectiveDate = policy.effectiveDate;
    this.expireDate = policy.expireDate;
    this.paymentOption = policy.paymentOption;
    this.policyAmount = policy.policyAmount;
    this.extraInfo = policy.extraInfo;
  }
}
