# As a Web Audio Node

You can provide an `audioContext` to glicol and use the output of glicol to another node from that `audioContext`:

```js
import Glicol from "glicol";

const myAudioContext = new AudioContext();
const gainNode = myAudioContext.createGain();
gainNode.gain.value = 0.1;
gainNode.connect(myAudioContext.destination);

const glicol = new Glicol({
  audioContext: myAudioContext,
  connectTo: gainNode,
});
```
