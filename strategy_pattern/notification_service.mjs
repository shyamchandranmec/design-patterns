'use strict';

import NotificationStrategy from "./strategy/notification_strategy.mjs";
export default class NotificationService {
    constructor(notificationStrategy) {
        this._notificationStrategy = notificationStrategy
    }
    set notificationStrategy(notificationStrategy) {
        console.log("Setting notification strategy to ", notificationStrategy)
        this._notificationStrategy = notificationStrategy
    }
    notifyUser(user, message) {
        this._notificationStrategy.sendNotification(user, message)
    }
}