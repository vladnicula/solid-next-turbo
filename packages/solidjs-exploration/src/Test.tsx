import { createSignal, onMount, JSX, createEffect, onCleanup } from "solid-js"
import { select } from 'proxy-live-document'

export const Test = (props: {
    someGlobalState: {
        key: string
    },
}) => {
    const [ count, setCount ] = createSignal(0)
    const [ keyValue, setKeyValue ] = createSignal(props.someGlobalState.key)

    onMount(() => {
        const selector = select(props.someGlobalState, ['/key'], (root) => {
            console.log("this should also run")
            setKeyValue(root.key)
        })

        onCleanup(() => {
            selector.dispose()
        })
    })

    const handleInc = () => {
        setCount(c => ++c)
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            Can we read {keyValue()}? {count()}
        </div>
    )
}
