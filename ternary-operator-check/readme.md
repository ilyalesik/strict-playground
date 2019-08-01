# Ternary operator check

Test:
find error at expression:
```javascript
const isTrue = () => Math.random() < 0.5;

const result = isTrue ? 1 : 2;
```


| Technology          | Result | Comment                                                             |
| ------------------- | ------ | ------------------------------------------------------------------- |
| ESLint              | ⛔️     |                                                                     |
| Flow                | ⛔️     |                                                                     |
| Flow + ESLint       | ⛔️     | eslint-plugin-flowtype                                              |
| TypeScript          | ⛔️     |                                                                     |
| TypeScript + TSLint | ✅      | https://palantir.github.io/tslint/rules/strict-boolean-expressions/ |
| ReasonML            | ✅      |                                                                     |
