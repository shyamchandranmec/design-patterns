'use strict';

import INotificatinoStrategy from "./interfaces/i_notification_strategy";
export default class NotificationService {
    _notificationStrategy:INotificatinoStrategy
    constructor(notificationStrategy: INotificatinoStrategy) {
        this._notificationStrategy = notificationStrategy
    }
    set notificationStrategy(notificationStrategy:INotificatinoStrategy) {
        console.log("Setting notification strategy to ", notificationStrategy)
        this._notificationStrategy = notificationStrategy
    }
    notifyUser(user:string, message:string) {
        this._notificationStrategy.sendNotification(user, message)
    }
}