import { PaymentStrategy } from './PaymentStrategy';

export class UPIPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Processing UPI payment of ₹${amount}`);
  }
}
