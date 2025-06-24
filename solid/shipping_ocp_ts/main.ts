import { Shipping } from './Shipping';
import { StandardShipping } from './StandardShipping';
import { ExpressShipping } from './ExpressShipping';

const standard = new Shipping(new StandardShipping());
console.log(standard.calculate()); // 50

const express = new Shipping(new ExpressShipping());
console.log(express.calculate()); // 100
