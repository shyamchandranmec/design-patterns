"use strict"

interface IPaymentFlow {
    validateRequest():void
    calculateFees():void
    debitAmount():void
    creditAmount():void
    sendMoney():void
}

abstract class AbstractPaymentFlow implements IPaymentFlow {
    abstract validateRequest(): void 
    abstract calculateFees(): void 
    abstract debitAmount(): void 
    abstract creditAmount(): void 
    sendMoney(): void {
        this.validateRequest()
        this.calculateFees()
        this.debitAmount()
        this.creditAmount()
    }

}

class PayToFriend extends AbstractPaymentFlow {
    validateRequest(): void {
        console.log("Validating request for Pay to Friend")
    }
    calculateFees(): void {
        console.log("Calculating for Pay to Friend")
    }
    debitAmount(): void {
        console.log("Debiting Amount for Pay to Friend")
    }
    creditAmount(): void {
        console.log("Crediting Amount for Pay to Friend")
    }
    
}

class PayToMerchant extends AbstractPaymentFlow {
    validateRequest(): void {
        console.log("Validating request for Pay To Merchant")
    }
    calculateFees(): void {
        console.log("Calculating for Pay To Merchant")
    }
    debitAmount(): void {
        console.log("Debiting Amount for Pay To Merchant")
    }
    creditAmount(): void {
        console.log("Crediting Amount for Pay To Merchant")
    }
    
}

export {
    PayToFriend, PayToMerchant, IPaymentFlow
}