import { CardPayment } from './CardPayment';
import { UPIPayment } from './UPIPayment';
import { BitcoinPayment } from './BitcoinPayment';
import { Payment } from './Payment';

const payment = new Payment(new CardPayment());
payment.process(1000);

payment.setStrategy(new BitcoinPayment());
payment.process(2000);
