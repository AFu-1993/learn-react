### 最好将渲染 UI 和添加交互这两个过程分开
> 最好将渲染 UI 和添加交互这两个过程分开。这是因为，编写一个应用的静态版本时，往往要编写大量代码，而不需要考虑太多交互细节；添加交互功能时则要考虑大量细节，而不需要编写太多代码。所以，将这两个过程分开进行更为合适。我们会在接下来的代码中体会到其中的区别。

> React 单向数据流（也叫单向绑定）的思想使得组件模块化，易于快速开发。
[React 哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html)


### React 是如何把对 Hook 的调用和组件联系起来的？
>React 保持对当先渲染中的组件的追踪。多亏了 Hook 规范，我们得知 Hook 只会在 React 组件中被调用（或自定义 Hook —— 同样只会在 React 组件中被调用）。
>
>每个组件内部都有一个「记忆单元格」列表。它们只不过是我们用来存储一些数据的 JavaScript 对象。当你用 useState() 调用一个 Hook 的时候，它会读取当前的单元格（或在首次渲染时将其初始化），然后把指针移动到下一个。这就是多个 useState() 调用会得到各自独立的本地 state 的原因。
[React 是如何把对 Hook 的调用和组件联系起来的？](https://zh-hans.reactjs.org/docs/hooks-faq.html#how-does-react-associate-hook-calls-with-components)
