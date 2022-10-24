import * as Tone from "tone";

const synthFM = new Tone.FMSynth().toDestination();

synthFM.frequency

class Assy {

  /**
   * Runs a new instance of Assy.
   */
  public static run(): void {
    console.log(typeof this.prototype);
  };

}

function main(): void {
  Assy.run();
}

main();
