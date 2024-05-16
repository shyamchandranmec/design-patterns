"use strict";

export default class NotificationStrategy {
    sendNotification(user, message) {
        throw new Error('Send notification method must be implemented')
    }
}