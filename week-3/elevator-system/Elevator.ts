import { ElevatorDirection, ElevatorState } from "./enums";
import { ElevatorRequest } from "./types";

export class Elevator {
  private static MAX_PEOPLE = 8;
  private static MAX_WEIGHT = 680;

  id: number;
  currentFloor: number = 1;
  direction: ElevatorDirection = ElevatorDirection.IDLE;
  state: ElevatorState = ElevatorState.CLOSE_DOOR;
  requests: ElevatorRequest[] = [];
  currentWeight: number = 0;
  currentPeople: number = 0;

  constructor(id: number) {
    this.id = id;
  }

  canAcceptRequest(request: ElevatorRequest): boolean {
    return (
      this.currentPeople + request.people <= Elevator.MAX_PEOPLE &&
      this.currentWeight + request.weight <= Elevator.MAX_WEIGHT
    );
  }

  assignRequest(request: ElevatorRequest): boolean {
    if (this.canAcceptRequest(request)) {
      this.requests.push(request);
      this.currentWeight += request.weight;
      this.currentPeople += request.people;
      return true;
    }
    return false;
  }

  move(): void {
    if (this.requests.length === 0) {
      this.direction = ElevatorDirection.IDLE;
      this.state = ElevatorState.CLOSE_DOOR;
      return;
    }

    const target = this.requests[0];

    if (this.currentFloor < target.fromFloor) {
      this.direction = ElevatorDirection.UP;
      this.currentFloor++;
      this.state = ElevatorState.MOVING;
    } else if (this.currentFloor > target.fromFloor) {
      this.direction = ElevatorDirection.DOWN;
      this.currentFloor--;
      this.state = ElevatorState.MOVING;
    } else {
      this.state = ElevatorState.OPEN_DOOR;
      console.log(`Elevator ${this.id}: Opening doors at floor ${this.currentFloor}`);
      this.processRequest(target);
    }
  }

  private processRequest(request: ElevatorRequest): void {
    if (this.currentFloor === request.fromFloor) {
      console.log(`Elevator ${this.id}: Picking up passenger`);
      this.requests[0].fromFloor = request.toFloor;
    } else if (this.currentFloor === request.toFloor) {
      console.log(`Elevator ${this.id}: Dropping off passenger`);
      this.requests.shift();
      this.currentWeight -= request.weight;
      this.currentPeople -= request.people;
      this.state = ElevatorState.CLOSE_DOOR;
      this.direction = ElevatorDirection.IDLE;
    }
  }

  status() {
    return {
      id: this.id,
      floor: this.currentFloor,
      direction: this.direction,
      state: this.state,
      people: this.currentPeople,
      weight: this.currentWeight
    };
  }
}