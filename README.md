# pac-api-typings

[![npm version](https://img.shields.io/npm/v/pac-api-typings.svg)](https://www.npmjs.com/package/pac-api-typings)

Type definitions for [JavaScript APIs of PAC](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) in TypeScript

English | [简体中文](./README-zh-hans.md)

## Installation

```sh
npm install pac-api-typings
```

## Usage

Add the types package to your [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types) file. For example:

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

Or you could use it with [triple-slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html). For example:

```ts
// ./typings/global.d.ts
/// <reference types="pac-api-typings" />
```

## License

MIT © Qingrong Ke
