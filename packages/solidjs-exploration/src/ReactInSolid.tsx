import { createSignal, onMount } from "solid-js"
import { createRoot } from "react-dom/client"

export const ReactInSolid = (
    props: {child:  JSX.Element}
) => {
    const [ count, setCount ] = createSignal(0)

    const handleInc = () => {
        setCount(c => ++c)
    }

    let reactDomRoot : HTMLDivElement | undefined
    onMount(() => {
        const root = createRoot(reactDomRoot!)
        root.render(props.child)
    })

    return (
        <div>
            <p>The content below comes from React</p>
            <div ref={(el) => {
                reactDomRoot = el
            }} data-documentation='this is the react root node that is used to render react components'>

            </div>

            <p>
                And this content comes from Solid
            </p>
            <button onClick={handleInc}>+</button>
            {count()}
        </div>
    )
}
