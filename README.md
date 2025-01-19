# Typescript React useEffect throw Error Demo

演示React中useEffect抛出错误时的行为，以及Error Boundary的作用。

## 关键点

1. useEffect中的错误处理
   - useEffect是在组件渲染后异步执行
   - 抛出的错误会导致React卸载整个组件树
   - 这种错误不能被try-catch捕获

2. Error Boundary
   - 可以捕获子组件树中的渲染错误和生命周期错误
   - 无法捕获以下类型的错误：
     * Event handlers (事件处理函数)
     * 异步代码 (setTimeout, requestAnimationFrame, etc.)
     * 服务端渲染
     * Error Boundary自身的错误

## 实现细节

- `ErrorDemo.tsx`: 包含一个会在useEffect中抛出错误的组件
- `ErrorBoundary.tsx`: 实现了React的错误边界
- `App.tsx`: 同时展示有/无Error Boundary保护的组件

## 运行

```bash
pnpm install
pnpm dev
```

## 测试步骤

1. 点击未保护组件的按钮
   - 整个应用会崩溃
   - 页面变为空白

2. 刷新页面，点击受保护组件的按钮
   - 只有该组件被替换为错误UI
   - 其他组件保持正常工作 