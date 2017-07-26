<p align="left">
  <a href="https://www.npmjs.com/package/rest-css"><img src="https://img.shields.io/npm/v/rest-css.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/rest-css"><img src="https://img.shields.io/npm/dm/rest-css.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/rest-css"><img src="https://img.shields.io/npm/l/rest-css.svg" alt="License"></a>
</p>

> a css file, you can import it anywhere that use the javascript.

## Start
``` shell
npm i --save rest-css
```

## Use
> you can use it in javascript(maybe vue, react, angluar, etc) directly, as long as you can use javascript. but you sholud keep it importing before all other css files;
- in javascript file
``` javascript
import 'rest-css'
```
- in vue, as long as you can use javacript, you also can inport it.
``` vue
<template>
    <div id="app"></div>
</template>
<script>
    //import css，package autoly
    import 'rest-css'
    export default { }
</script>
<style>
</style>
```
- of course, if you don't like import css in js, also in css to import it;
``` css
@import url('../node_modules/rest-css/src/rest.css')
```
## Reference
- [-webkit-text-size-adjust](http://blog.csdn.net/mxy2013/article/details/49813331)