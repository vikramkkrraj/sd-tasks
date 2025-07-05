import { ElevatorSystem } from "./ElevatorSystem";

const system = new ElevatorSystem(3);

system.requestElevator({ fromFloor: 1, toFloor: 5, weight: 70, people: 1 });
system.requestElevator({ fromFloor: 2, toFloor: 8, weight: 90, people: 2 });
system.requestElevator({ fromFloor: 3, toFloor: 7, weight: 600, people: 6 });
system.requestElevator({ fromFloor: 4, toFloor: 9, weight: 120, people: 3 });

for (let i = 0; i < 10; i++) {
  system.step();
  system.monitor();
}