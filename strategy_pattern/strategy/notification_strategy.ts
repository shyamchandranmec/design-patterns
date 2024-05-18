"use strict";

export default class NotificationStrategy {
    sendNotification(user:string, message:string) {
        throw new Error('Send notification method must be implemented')
    }
}