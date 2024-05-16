"user strict";

import NotificationStrategy from "../strategy/notification_strategy.mjs";


export default class PushNotification extends NotificationStrategy {
    sendNotification(user, message) {
        console.log(`Push notification to ${user} : ${message}`)
    }
}