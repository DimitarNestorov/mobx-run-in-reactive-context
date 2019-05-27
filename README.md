# mobx-run-in-reactive-context

[![npm version](https://img.shields.io/npm/v/mobx-run-in-reactive-context.svg?style=flat)](https://npmjs.org/package/mobx-run-in-reactive-context)

Use this whenever you get this warning: `Computed value is being read outside a reactive context. Doing a full recompute.`

```javascript
import runInReactiveContext from 'mobx-run-in-reactive-context'

// ...

runInReactiveContext(() => {
	// Read your computed value here
	console.log(object.computedValue)
})
```
