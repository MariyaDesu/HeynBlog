---
title: 现代JavaScript教程-01 #文章标题
author: Heyn #作者
date: 2023-12-27

category:
  - 'Javascript'
tags:
  - '基础知识'
  - '教程'
---

## 第一节：Hello，world！

本教程的这一部分内容是关于 JavaScript 语言本身的。

但是，我们需要一个工作环境来运行我们的脚本，由于本教程是在线的，所以浏览器是一个不错的选择。我们会尽可能少地使用浏览器特定的命令（比如 `alert`），所以如果你打算专注于另一个环境（比如 Node.js），你就不必多花时间来关心这些特定指令了。我们将在本教程的 [下一部分]() 中专注于浏览器中的 JavaScript。

首先，让我们看看如何将脚本添加到网页上。对于服务器端环境（如 Node.js），你只需要使用诸如 `"node my.js"` 的命令行来执行它。

### **"script"标签**

我们几乎可以使用 `<script>` 标签将 JavaScript 程序插入到 HTML 文档的任何位置

比如：

```javascript
<!DOCTYPE HTML>
<html>
<body>
  <p>script 标签之前...</p>
  <script>
    alert('Hello, world!');
  </script>
  <p>...script 标签之后</p>
</body>
</html>
```

`<script>`标签中包裹了 JavaScript 代码，当浏览器遇到 `<script>` 标签，代码会自动运行。

### **现代的标记（markup）**

`<script>` 标签有一些现在很少用到的特性（attribute），但是我们可以在老代码中找到它们：

```
type` 特性：`<script type=…>
```

在老的 HTML4 标准中，要求 script 标签有 `type` 特性。通常是 `type="text/javascript"`。这样的特性声明现在已经不再需要。而且，现代 HTML 标准已经完全改变了此特性的含义。现在，它可以用于 JavaScript 模块。但这是一个高阶话题，我们将在本教程的另一部分中探讨 JavaScript 模块。

```
language` 特性：`<script language=…>
```

这个特性是为了显示脚本使用的语言。这个特性现在已经没有任何意义，因为语言默认就是 JavaScript。不再需要使用它了。

脚本前后的注释。

在非常古老的书籍和指南中，你可能会在 `<script>` 标签里面找到注释，就像这样：

```javascript
<script type="text/javascript"><!--
    ...
//--></script>
```

现代 JavaScript 中已经不这样使用了。这些注释是用于不支持 `<script>` 标签的古老的浏览器隐藏 JavaScript 代码的。由于最近 15 年内发布的浏览器都没有这样的问题，因此这种注释能帮你辨认出一些老掉牙的代码。

### **外部脚本**

如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。

脚本文件可以通过 `src` 特性（attribute）添加到 HTML 文件中。

```javascript
<script src="/path/to/script.js"></script>
```

这里，`/path/to/script.js` 是脚本文件从网站根目录开始的绝对路径。当然也可以提供当前页面的相对路径。例如，`src ="script.js"`，就像 `src="./script.js"`，表示当前文件夹中的 `"script.js"` 文件。

我们也可以提供一个完整的 URL 地址，例如：

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

要附加多个脚本，请使用多个标签：

```javascript
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```

**请注意：**

一般来说，只有最简单的脚本才嵌入到 HTML 中。更复杂的脚本存放在单独的文件中。

使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 [缓存](https://en.wikipedia.org/wiki/Web_cache) 中。

之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。

这可以节省流量，并使得页面（加载）更快。

**如果设置了 `src` 特性，`script` 标签内容将会被忽略。**

一个单独的 `<script>` 标签不能同时有 `src` 特性和内部包裹的代码。

这将不会工作：

```javascript
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

我们必须进行选择，要么使用外部的 `<script src="…">`，要么使用正常包裹代码的 `<script>`。

为了让上面的例子工作，我们可以将它分成两个 `<script>` 标签。

```javascript
<script src="file.js"></script>
<script>
  alert(1);
</script>
```

## 第二节：代码结构

### **语句**
语句是执行行为（action）的语法结构和命令。

我们已经见过了 alert('Hello, world!') 这样可以用来显示消息的语句。

我们可以在代码中编写任意数量的语句。语句之间可以使用分号进行分割。

例如，我们将 “Hello World” 这条信息一分为二：

```javascript
alert('Hello'); alert('World');
```

通常，每条语句独占一行，以提高代码的可读性：

```javascript
alert('Hello');
alert('World');
```

### 分号

当存在换行符（line break）时，在大多数情况下可以省略分号。

下面的代码也是可以运行的：

```javascript
alert('Hello')
alert('World')
```

在这，JavaScript 将换行符理解成“隐式”的分号。这也被称为 自动分号插入。

**在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！**

有很多换行并不是分号的例子，例如：

```javascript
alert(3 +
1
+2);
```

代码输出 6，因为 JavaScript 并没有在这里插入分号。显而易见的是，如果一行以加号 "+" 结尾，那么这是一个“不完整的表达式”，不需要分号。所以，这个例子得到了预期的结果。

**但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**

这种情况下发生的错误是很难被找到和解决的。

一个错误的例子
如果你好奇地想知道一个这种错误的具体例子，那你可以看看下面这段代码：

```javascript
alert("Hello");

[1, 2].forEach(alert);
```

你不需要考虑方括号 [] 和 forEach 的含义，现在它们并不重要，之后我们会学习它们。让我们先记住这段代码的运行结果：先显示 Hello，然后显示 1，然后 2。

现在，让我们删除 alert 语句后的分号：

```javascript
alert("Hello")

[1, 2].forEach(alert);
```

与上面的代码相比只有一个字符的区别：第一行末尾的分号不见了。

如果我们运行这段代码，只有第一个 Hello 会被显示出来（并且有一个报错，你可能需要打开控制台才能看到它）。并且不会再有数字被显示出来。

这是因为，JavaScript 引擎并没有假设在方括号 [...] 前有一个分号。因此，最后一个示例中的代码被视为了单个语句。

对于引擎来说，它是这样的：

```javascript
alert("Hello")[1, 2].forEach(alert);
```

看起来很奇怪，对吧？在这种情况下，这样将两行代码合并到一起是不对的。我们需要在 alert 后面加一个分号，代码才能正常运行。

这也可能发生在其他情况下。

即使语句被换行符分隔了，我们依然建议在它们之间加分号。这个规则被社区广泛采用。我们再次强调一下 —— 大部分时候可以省略分号，但是最好不要省略分号，尤其对新手来说。

### 注释

随着时间推移，程序变得越来越复杂。为代码添加**注释**来描述它做了什么和为什么要这样做，变得非常有必要了。

你可以在脚本的任何地方添加注释，它们并不会影响代码的执行，因为引擎会直接忽略它们。

**单行注释以两个正斜杠字符 // 开始。**

这一行的剩余部分是注释。它可能独占一行或者跟随在一条语句的后面。

就像这样：

```javascript
// 这行注释独占一行
alert('Hello');

alert('World'); // 这行注释跟随在语句后面
```

**多行注释以一个正斜杠和星号开始 “/*” 并以一个星号和正斜杠结束 “*/”。**

就像这样:

```javascript
/* 两个消息的例子。
这是一个多行注释。
*/
alert('Hello');
alert('World');
```

注释的内容被忽略了，所以如果我们在 /* … */ 中放入代码，并不会执行。

有时候，可以很方便地临时禁用代码：

/* 注释代码

```javascript
alert('Hello');
*/
alert('World');
```

**使用快捷键！**

在大多数的编辑器中，一行代码可以使用 Ctrl+/ 快捷键进行单行注释，诸如 Ctrl+Shift+/ 的快捷键可以进行多行注释（选择代码，然后按下快捷键）。对于 Mac 电脑，应使用 Cmd 而不是 Ctrl，使用 Option 而不是 Shift。

**不支持注释嵌套！**

不要在 /*...*/ 内嵌套另一个 /*...*/。

下面这段代码报错而无法执行：

```javascript
/*
  /* 嵌套注释 ?!? */
*/
alert( 'World' );
```

对你的代码进行注释，这还有什么可犹豫的！

注释会增加代码总量，但这一点也不是什么问题。有很多工具可以帮你在把代码部署到服务器之前缩减代码。这些工具会移除注释，这样注释就不会出现在发布的脚本中。所以，注释对我们的生产没有任何负面影响。

在后面的教程中，会有一节 [代码质量]() 的内容解释如何更好地写注释。