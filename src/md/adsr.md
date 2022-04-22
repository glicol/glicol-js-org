## ADSR

ADSR stands for attack, decay, sustain, and release.

Glicol provides a node `adsr` for that and we need to use the concept covered so far.

First, create a const sig 0 to control the node.

```js
glicol.play({
    o: saw(100).mul("~amp"),
    "~amp": sig(0).adsr(1, 2, 0.3, 3)
})
```

The we can `sendMsg` to the `sig` node:


```js
document.getElementById('gateoff').onclick = () => {
  glicol.sendMsg(`~amp, 0, 0, 1`)
};
```

This will trigger the attack and decay, and the value stays at the the sustain value 0.3.

Then we send the gate off information, which will trigger the release phase:

```js
document.getElementById('gateoff').onclick = () => {
  glicol.sendMsg(`~amp, 0, 0, 0`)
};
```

### Full project

https://stackblitz.com/edit/glicol-adsr