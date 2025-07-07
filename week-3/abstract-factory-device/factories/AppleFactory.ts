import { Device } from '../Device';
import { AppleLaptop } from '../devices/AppleLaptop';
import { ApplePhone } from '../devices/ApplePhone';
import { DeviceFactory } from './DeviceFactory';

export class AppleFactory implements DeviceFactory {
  createDevice(type: string): Device {
    if (type === "laptop") return new AppleLaptop();
    if (type === "phone") return new ApplePhone();
    throw new Error("Unknown Apple device type.");
  }
}