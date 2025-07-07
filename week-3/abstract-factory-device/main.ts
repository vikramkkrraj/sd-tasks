import { AppleFactory } from './factories/AppleFactory';
import { SamsungFactory } from './factories/SamsungFactory';

const appleFactory = new AppleFactory();
const samsungFactory = new SamsungFactory();

const appleLaptop = appleFactory.createDevice("laptop");
const samsungPhone = samsungFactory.createDevice("phone");

appleLaptop.specifications();
samsungPhone.specifications();