"use strict"

import { IPaymentFlow } from "./payments";

export default class PaymentController {
    payment: IPaymentFlow

    constructor(pf: IPaymentFlow) {
        this.payment = pf
    }

    pay(): void {
        this.payment.sendMoney()
    }
}