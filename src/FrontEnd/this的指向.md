---
title: this的指向 #文章标题
author: Heyn #作者
date: 2024-02-10
category:
  - 'ES6'
  - 'Javascript'
  - 'THIS'
tags:
  - ES6 
  - THIS
---

## this的一些基础知识

1. **this** 是javascript中的一个关键字，并非是一个变量。
2. **this** 关键字指向的是一个对象，而指向哪个对象，或者是这个对象的值是什么取决于使用(调用)的方式和环境。
3. **this** 指向的值是可以通过手动方式去改变的，比如call、bind、apply方法。
4. **this** 在严格模式和非严格模式下也会有差别。

## **一、全局普通函数**

### 非严格模式下，全局普通函数的this指向 **window**

```js
var a = 0; // 相当于window.a = 0
function testWindow() {
    this.a = 1; //相当于window.a 
    console.log(this.a); //1
    console.log(window.a); // 1
    console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
}
testWindow();
```

### 严格模式下，普通函数的this指向undefined

```js
var a = 1;
function testStrict() {
    "use strict";
    console.log(this); //undefined
    console.log(this.a); // Uncaught TypeError: Cannot read property 'a' of undefined
}
testStrict();
```

## **二、对象的函数方法**

```javascript
// 不管是严格模式还是非严格模式，调用对象的函数方法时，被调用函数中的this永远指向这个对象
var a = 2;
var obj = {
    a: 1,
    b: function () {
        console.log(this); //{a: 1, b: ƒ}
        console.log(this.a); //1
    }
};
obj.b();
```

做一个小练习题，将上面的代码进行一个简单的变化：

```javascript
var a = 2; 
var obj = {
    a: 1,
    b: function () {
        console.log(this);  // window {window: Window, self: Window,  …}
        console.log(this.a); // 2
    }
};
var foo = obj.b;
foo();   // 相当于window.foo()
```

为什么这个时候this是指向了window呢？

我们在开头说过，对象中函数调用，this是指向调用这个函数的对象。

foo变量接收了obj对象中的b函数，并且在全局作用域下执行，其实就相当于window.foo(),

那么自然就变成了第一种情况：全局作用域下普通函数调用指向window（非严格模式下）

## **三、构造函数**

```javascript
//不管是严格模式还是非严格模式，构造函数中的this都是指向构造函数创建的对象实例

function Test(a) {
    this.a = a;
    console.log(this.a); //1
}

Test.prototype.say = function () {
    console.log(this); //test {a: 1}
    console.log(this.a); //1
};

var t = new test(1);
console.log(t); //test {a: 1}

t.say();
```

## **四、事件处理函数**

```html
<body>
    <button id="btn">click</button>
    <button id="btn1">click1</button>
    <script>
        /**
     * this指向被绑定的目标对象
     * */
        var btn = document.getElementById("btn");
        btn.onclick = function () {
            console.log(this); // <button id="btn">click</button>
            this.innerHTML = "loading..";
            this.disabled = true;
        };


        var btn1 = document.getElementById("btn1");
        btn1.onclick = () => {
            console.log(this); //window
        };
    </script>
</body>
```

## **五、内联函数**

以下代码包含了严格模式和非严格模式不同的情况。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>

        <button onclick=" alert(this);">内联事件处理0</button> //元素本身即button

        <button onclick="alert((function(){'use strict'; return this})());">内联事件处理1</button> 

        //undefined

        <button onclick="alert((function(){ return this})());">内联事件处理2</button> 

        //window

        <button onclick="'use strict'; alert(this.tagName.toLowerCase());">内联事件处理3</button> 

        //button

    </body>
</html>
```

## **六、全局作用域**

全局作用域下就比较简单了，直接记住就好。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            /**
       * 不管是严格模式还是不是严格模式this都指向window
       * */
            "use strict";
            console.log(this); // window




        </script>
    </body>
</html>
```

###  值得扩展的一点是，不同环境下的全局对象是不一样的

1. 浏览器web： window,self,frames
2. node环境下： global
3. web worker : self

而在ES2020中，最终定义了 **globalThis** 作为在任何上下文中引用全局对象的标准方式。2020年初，所有现代浏览器和Node都实现了这个特性,具体详细可以参考：[mdn web_docs](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FglobalThis)

## **七、箭头函数**

我们这里把箭头函数单独拿出来总结，在ES6中箭头函数的出现大大改善了this指向的‘繁琐’情况：

1. 箭头函数自身没有this；
2. 箭头函数的this不是调用的时候决定的,而是在定义的时候所处的环境就已经决定了。
3. 技巧： 箭头函数的this看外层是否有函数

- 1).如果有,外层函数的this就是内部箭头函数的this
- 2).如果没有,this就是window.

### 普通的箭头函数在全局环境下始终指向window

```js
let testES6 = () => {
    console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
};

testES6();

let testES6Strict = () => {
    "use strict";
    console.log(this); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
};

testES6Strict();
```

### 对象的箭头函数中，this则是指向执行该对象所处的执行上下文(执行环境)

```js
var obj = {
    fun: () => {
        console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    }
};

obj.fun(); // fun箭头函数外层没有函数，指向window

var obj = {
    fun: () => {
        "use strict";
        console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    }
};
obj.fun();
```

### 事件处理中的箭头函数中，this指向window

```html
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>

    <body>
        <button id="btn1">click1</button>
        <script>
            var btn1 = document.getElementById("btn1");
            btn1.onclick = () => {
                console.log(this); //window
            };
        </script>
    </body>

</html>
```
