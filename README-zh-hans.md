# Proxy Auto-Configuration (PAC) 类型定义文件

[![npm version](https://img.shields.io/npm/v/pac-api-typings.svg)](https://www.npmjs.com/package/pac-api-typings)

[Proxy Auto-Configuration (PAC)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 的 TypeScript 类型定义文件

[English](./README.md) | 简体中文

## 安装

```sh
npm install pac-api-typings
```

## 用法

你可以将该类型定义文件加到项目的 [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) 编译配置中。例如：

```json
{
  "compilerOptions": {
    "typeRoots" : [
      "./node_modules/@types",
      "./node_modules/pac-api-typings",
      "./typings",
    ]
  }
}
```

或者搭配 [三斜线指令](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) 使用。例如：

```ts
// ./typings/global.d.ts
/// <reference types="pac-api-typings" />
```

## 许可证

MIT © Qingrong Ke
