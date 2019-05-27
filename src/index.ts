import { autorun } from 'mobx'

/**
 * Runs `callback` in a reactive context
 * @example
 * ```
 * runInReactiveContext(() => {
 *   // Read your computed value here
 *   console.log(object.computedValue)
 * })
 * ```
 * @param callback The function which will be run in a reactive context
 */
export default function runInReactiveContext(callback: () => void): void {
	autorun((reaction) => {
		callback()
		reaction.dispose()
	})
}
