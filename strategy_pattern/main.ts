"use strict";
import EmailNotification from './notifiers/EmailNotification';
import PushNotification from './notifiers/PushNotification';
import SMSNotification from './notifiers/SMSNotification';
import NotificationService from './notification_service.js';

const smsNotification = new SMSNotification()
const notificationService = new NotificationService(smsNotification)
notificationService.notifyUser("Shyam", "Good morning")

const emailNotification  = new EmailNotification()
notificationService.notificationStrategy = emailNotification
notificationService.notifyUser("Shyam", "Good afternoon")

const pusNotification = new PushNotification()
notificationService.notificationStrategy = pusNotification
notificationService.notifyUser("Shyam", "Good Evening")
