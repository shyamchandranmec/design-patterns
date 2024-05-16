"use strict";

import NotificationStrategy from "../strategy/notification_strategy.mjs";


export default class EmailNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`Email notification to ${user} : ${message}`)
    }
}