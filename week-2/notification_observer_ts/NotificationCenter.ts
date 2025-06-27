import { Observer } from './Observer';

export class NotificationCenter {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
    console.log(`Observer added: ${observer.constructor.name}`);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
    console.log(`Observer removed: ${observer.constructor.name}`);
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
