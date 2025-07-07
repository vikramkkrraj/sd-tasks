import { Device } from '../Device';
import { SamsungLaptop } from '../devices/SamsungLaptop';
import { SamsungPhone } from '../devices/SamsungPhone';
import { DeviceFactory } from './DeviceFactory';

export class SamsungFactory implements DeviceFactory {
  createDevice(type: string): Device {
    if (type === "laptop") return new SamsungLaptop();
    if (type === "phone") return new SamsungPhone();
    throw new Error("Unknown Samsung device type.");
  }
}