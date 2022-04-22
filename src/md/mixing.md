## Mixing

So far, there are not so many built-in effect with Glicol.

But there are delay nodes (either in samples or in ms), as well as a Dattorro plate reverb node.

To use the reverb, the easiest way is to use the `mix` node.

```js
glicol.play({
    '~t1': seq('60 60 60 60').sp('808bd').mul(0.5),
    '~t2': seq('60 _ 67 _63').sp('guitar').lpf(1800, 1).mul(0.5),
    o: mix('~t1 ~t2').plate(0.1),
});
```

Note how the `mix` use `..` as a syntax sugar. The example above is equivalant to:

```js
glicol.play({
    '~t1': seq('60 60 60 60').sp('808bd').mul(0.5),
    '~t2': seq('60 _ 67 _63').sp('guitar').lpf(1800, 1).mul(0.5),
    o: mix('~t1 ~t2').plate(0.1),
});
```

### Full project

https://stackblitz.com/edit/glicol-mixing