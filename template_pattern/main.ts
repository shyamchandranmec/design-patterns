"use strict"

import PaymentController from "./payment_controller"
import { PayToFriend, PayToMerchant } from "./payments"

let ptf = new PayToFriend()
let ptm = new PayToMerchant()
let pc = new PaymentController(ptf)
pc.pay()

pc = new PaymentController(ptm)
pc.pay()