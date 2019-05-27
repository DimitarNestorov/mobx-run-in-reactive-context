import { autorun } from 'mobx'

export default function runInReactiveContext(callback: () => void): void {
	autorun((reaction) => {
		callback()
		reaction.dispose()
	})
}
