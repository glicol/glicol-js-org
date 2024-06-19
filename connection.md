# Connection

The idea of Glicol is to connect different nodes like playing synth modules.

In JavaScript, it's quite intuitive to do it by using the `.` connector.

```javascript
import Glicol from "glicol";
import { sin } from "glicol";

const glicol = new Glicol();

document.getElementById("play").onclick = () => {
  glicol.play({
    o: sin(440).mul("~am"),
    "~am": sin(0.81).mul(0.3).add(0.5),
  });
};
```

Under the hood, the `add` or `mul` are methods to a hidden Class `NodeChain` which is the returned from function `sin`.

Therefore, everytime you just need to import the source function.

### Full project

https://stackblitz.com/edit/glicol-connection
