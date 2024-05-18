"user strict";

import NotificationStrategy from "../strategy/notification_strategy";


export default class PushNotification extends NotificationStrategy {
    sendNotification(user:string, message:string) {
        console.log(`Push notification to ${user} : ${message}`)
    }
}