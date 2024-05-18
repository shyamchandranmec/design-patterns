"use strict";

import INotificatinoStrategy from "../interfaces/i_notification_strategy";

export default class NotificationStrategy implements INotificatinoStrategy {
    sendNotification(user:string, message:string) {
        throw new Error('Send notification method must be implemented')
    }
}