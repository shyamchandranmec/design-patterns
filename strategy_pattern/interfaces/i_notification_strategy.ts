"use strict";
export default interface INotificatinoStrategy {
    sendNotification(user: string, message: string): void
}