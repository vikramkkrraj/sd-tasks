import { PaymentStrategy } from './PaymentStrategy';

export class Payment {
  constructor(private strategy: PaymentStrategy) {}

  process(amount: number): void {
    this.strategy.pay(amount);
  }

  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }
}
