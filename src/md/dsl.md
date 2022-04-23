## Glicol DSL

Under the hood, the JS style graph will be converted to Glicol's syntax for sending to the engine.

To learn more about this syntax, see:

https://glicol.org

After you are familiar with the syntax, you can write your audio graph logic like this:

```js
glicol.run(`o: saw 50 >> lpf 300.0 1.0`)
```

You can call the `run` again if you want to change some parameters. There won't be an update to the whole graph. Instead, the Glicol Rust engine will be smart enough to tell the difference and only update where is modified.

```js
glicol.run(`o: saw 50 >> lpf 300.0 1.0`)
```

Another way is to send message to the engine:

```js
// chain "o", node_index 0, param 0, set to 110
glicol.sendMsg(`o, 0, 0, 110`);
```

You can use it with GUI, see this example:

https://glicol-npm.netlify.app

Multiple message in one String is also possible.

```js
glicol.sendMsg(`o, 0, 0, 110; o, 1, 0, 500; o, 1, 1, 0.8`);
```
