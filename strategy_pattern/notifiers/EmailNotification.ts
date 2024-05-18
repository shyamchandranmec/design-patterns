"use strict";

import NotificationStrategy from "../strategy/notification_strategy";


export default class EmailNotification extends NotificationStrategy {
    sendNotification(user:string, message:string) {
        console.log(`Email notification to ${user} : ${message}`)
    }
}