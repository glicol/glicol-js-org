# GUI

All you need to do is bind the GUI function to `glicol.sendMsg`.

```js
import Glicol from "glicol";
import { sin } from "glicol";

const glicol = new Glicol();

document.getElementById("play").onclick = () => {
  glicol.play({
    o: sin(440).mul(0.5),
  });
};

document.getElementById("freq").oninput = (e) => {
  glicol.sendMsg(`o, 0, 0, ${e.target.value}`);
};

document.getElementById("amp").oninput = (e) => {
  glicol.sendMsg(`o, 1, 0, ${e.target.value / 100}`);
};
```

### Full project

https://stackblitz.com/edit/glicol-gui?file=main.js
