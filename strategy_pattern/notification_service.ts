'use strict';

import NotificationStrategy from "./strategy/notification_strategy";
export default class NotificationService {
    _notificationStrategy:NotificationStrategy
    constructor(notificationStrategy: NotificationStrategy) {
        this._notificationStrategy = notificationStrategy
    }
    set notificationStrategy(notificationStrategy:NotificationStrategy) {
        console.log("Setting notification strategy to ", notificationStrategy)
        this._notificationStrategy = notificationStrategy
    }
    notifyUser(user:string, message:string) {
        this._notificationStrategy.sendNotification(user, message)
    }
}