import { NotificationCenter } from './NotificationCenter';
import { Smartphone } from './Smartphone';
import { Tablet } from './Tablet';

const notificationCenter = new NotificationCenter();

const phone = new Smartphone();
const tablet = new Tablet();

notificationCenter.attach(phone);   // Observer added: Smartphone
notificationCenter.attach(tablet);  // Observer added: Tablet

notificationCenter.notify();
// Smartphone received notification
// Tablet received notification
