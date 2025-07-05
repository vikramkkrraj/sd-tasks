// State Interface
interface PlayerState {
  play(): void;
  pause(): void;
  stop(): void;
}

// Context Class
class MediaPlayer {
  private currentState: PlayerState;

  constructor() {
    this.currentState = new StopState(this);
  }

  setState(state: PlayerState) {
    this.currentState = state;
  }

  play() {
    this.currentState.play();
  }

  pause() {
    this.currentState.pause();
  }

  stop() {
    this.currentState.stop();
  }
}

// Play State
class PlayState implements PlayerState {
  constructor(private player: MediaPlayer) {}

  play(): void {
    console.log("Already playing.");
  }

  pause(): void {
    console.log("Pausing playback.");
    this.player.setState(new PauseState(this.player));
  }

  stop(): void {
    console.log("Stopping playback.");
    this.player.setState(new StopState(this.player));
  }
}

// Pause State
class PauseState implements PlayerState {
  constructor(private player: MediaPlayer) {}

  play(): void {
    console.log("Resuming playback.");
    this.player.setState(new PlayState(this.player));
  }

  pause(): void {
    console.log("Already paused.");
  }

  stop(): void {
    console.log("Stopping playback from paused state.");
    this.player.setState(new StopState(this.player));
  }
}

// Stop State
class StopState implements PlayerState {
  constructor(private player: MediaPlayer) {}

  play(): void {
    console.log("Starting playback from beginning.");
    this.player.setState(new PlayState(this.player));
  }

  pause(): void {
    console.log("Can't pause. Media is already stopped.");
  }

  stop(): void {
    console.log("Already stopped.");
  }
}

//Usage Example
const player = new MediaPlayer();

player.play();  // Starting playback from beginning.
player.pause(); // Pausing playback.
player.play();  // Resuming playback.
player.stop();  // Stopping playback.
player.pause(); // Can't pause. Media is already stopped.