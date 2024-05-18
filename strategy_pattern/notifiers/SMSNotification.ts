"use strict";

import NotificationStrategy from "../strategy/notification_strategy";


export default class SMSNotification extends NotificationStrategy {
    sendNotification(user:string, message:string) {
        console.log(`SMS notification to ${user}: ${message}`)
    }
}