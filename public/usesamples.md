## Samples

By setting the `loadSamples` entry to `true`, you can get some automatically loaded samples.

```
import Glicol from 'glicol';
import { seq } from 'glicol';

const glicol = new Glicol({
  loadSamples: true,
});
```

Call `glicol.showAllSamples()` to see them in the console.

### Sample playback

You play samples by using the `sp` node (sample-playback).

It's triggered by any non-zero value: 1.0 will trigger the normal speed playback. 

2.0 double the speed thus octave higher; 0.5 octave lower.

Thus, the `imp` node is good for a regular triggering:

```js
glicol.play({
    o: imp(1.0).sp('808bd')
})
```

### The sequencer(seq) node

However, a more usefull tool is the `seq` node.

The "seq" node takes unlimited number of parameters called "notes", seperated by spaces.

These "notes" will equally divide one bar music.

Note can be midi number, rest _, or compound note such as _60.

Compound notes are further equally divided by the total number of midi(note) and rest(_)

I will cover how to make more complicated sequence pattern later.

### Settings

You can also call `glicol.addSampleFiles(name, url)` to load your own samples.

The `name` is what you want to call your sample in Glicol.

The `url` is optional; if not provided, a local file loader will open for you to load samples.

You can also call `glicol.setBPM(bpmNumber)` to set the BPM. The default time signature is 4/4.

> More settings such as bar duration or cycle dur will come soon.

### Full project

https://stackblitz.com/edit/glicol-use-samples