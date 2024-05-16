"use strict";
import EmailNotification from './notifiers/EmailNotification.mjs';
import PushNotification from './notifiers/PushNotification.mjs';
import SMSNotification from './notifiers/SMSNotification.mjs';
import NotificationService from './notification_service.mjs';

const smsNotification = new SMSNotification()
const notificationService = new NotificationService(smsNotification)
notificationService.notifyUser("Shyam", "Good morning")

const emailNotification  = new EmailNotification()
notificationService.notificationStrategy = emailNotification
notificationService.notifyUser("Shyam", "Good afternoon")

const pusNotification = new PushNotification()
notificationService.notificationStrategy = pusNotification
notificationService.notifyUser("Shyam", "Good Evening")
