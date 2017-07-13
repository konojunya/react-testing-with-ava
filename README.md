# react-testing
React component test code

# use

```
$ npm install
$ npm test
```

# screen shot

![](https://raw.githubusercontent.com/konojunya/react-testing/master/screenshots/testing.png)

# component

`src/component/App.jsx`

```
import React from "react"

export default class App extends React.Component {

  render() {
    return(
      <h1 className="title">hello world</h1>
    )
  }

}
```

# test pattern

- can use ava
- rendered h1 element
- render hello world
- has a .title class name

- まずavaが使える状態であるか
- h1要素でレンダリングされているか
- hello worldという文字がレンダリングされているか
- titleというクラス名がついているか

# reference

- [avajs/ava README](https://github.com/avajs/ava)
- [avajs/ava Testing React components](https://github.com/avajs/ava/blob/master/docs/recipes/react.md)
- [JavaScriptのテストフレームワークはAVAが流行り気味らしいので調べてみた](http://qiita.com/niisan-tokyo/items/000db7cd0e995c802334)
- [airbnb/enzyme](https://github.com/airbnb/enzyme)
