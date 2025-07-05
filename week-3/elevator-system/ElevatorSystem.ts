import { Elevator } from "./Elevator";
import { ElevatorRequest } from "./types";

export class ElevatorSystem {
  elevators: Elevator[] = [];
  pendingRequests: ElevatorRequest[] = [];

  constructor(numElevators: number) {
    this.elevators = Array.from({ length: numElevators }, (_, i) => new Elevator(i + 1));
  }

  requestElevator(request: ElevatorRequest): void {
    const available = this.elevators.find(e => 
      e.canAcceptRequest(request)
    );

    if (available) {
      console.log(`Assigning Elevator ${available.id} to request from Floor ${request.fromFloor} to ${request.toFloor}`);
      available.assignRequest(request);
    } else {
      console.log("No available elevator. Request queued.");
      this.pendingRequests.push(request);
    }
  }

  step(): void {
    for (const elevator of this.elevators) {
      elevator.move();
    }

    this.retryPendingRequests();
  }

  retryPendingRequests(): void {
    const remaining: ElevatorRequest[] = [];

    for (const request of this.pendingRequests) {
      const assigned = this.elevators.find(e => e.canAcceptRequest(request));
      if (assigned) {
        assigned.assignRequest(request);
        console.log(`Pending request now assigned to Elevator ${assigned.id}`);
      } else {
        remaining.push(request);
      }
    }

    this.pendingRequests = remaining;
  }

  monitor(): void {
    for (const elevator of this.elevators) {
      console.log(elevator.status());
    }
  }
}