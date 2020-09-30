---
sidebarDepth: 2
---
# Load HTTP

## Description

A wrapper for for ky-universal that will dynamically auto install polyfills wear needed.

## Install

```bash
yarn add @houlagins/load-http

#OR 

npm install @houlagins/load-http
```

## API

### get$http

```js
import { get$http } from '@houlagins/load-http'

async function getData(){
  const $http   = await get$http()
  const action = await $http.get('https://api.cbd.int/api/v2019/actions/5cda8a5f3e27a60001320d27').then((res) => res.json())

  consola.info(action)
  return action
}
```

### toURLSearchParams({/* object of search params*/})

returns new URLSearchParams() based on object passed.  Stringifying nested objects and Date objects.