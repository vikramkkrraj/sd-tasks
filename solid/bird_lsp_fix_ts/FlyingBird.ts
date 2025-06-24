import { Bird } from './Bird';

export abstract class FlyingBird extends Bird {
  abstract fly(): void;
}
