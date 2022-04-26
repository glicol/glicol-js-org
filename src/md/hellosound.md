## Hello sound

This is a minimal demo of using Glicol. `Vite` is recommand as the build tool for your web app.

### Installation

`npm i glicol`

### Import the package

```js
import Glicol from 'glicol'
import { sin } from 'glicol'
const glicol = new Glicol()
```

### Bind the play to a GUI action

Due to many browsers' limitation, audio playing requires a GUI action such as a button click.

For vanilla JS, you can do like this:
```js
document.getElementById("play").onclick = () => {
    glicol.play({
        o: sin(440)
    })
}
```

### Full project example

https://stackblitz.com/edit/glicol-js-helloworld

<!-- <div style="width: 100%">
<iframe src="https://stackblitz.com/edit/glicol-js-helloworld?embed=1&file=main.js"></iframe>
</div> -->