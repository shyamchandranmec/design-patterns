"use strict";

import NotificationStrategy from "../strategy/notification_strategy.mjs";

export default class SMSNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`SMS notification to ${user}: ${message}`)
    }
}