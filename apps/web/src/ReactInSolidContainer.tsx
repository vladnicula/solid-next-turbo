import { useEffect, useState } from "react";
import { render } from 'solid-js/web'
    
import { ReactInSolid } from 'solidjs-exploration'
import { Button } from "ui";

const StatefulReactComponent = () => {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      {count}
      <Button
        onClick={() => {
          setCount((c) => ++c)
        }}
      >+</Button>
    </div>
  )
}

export const ReactInSolidContainer = () => {

  useEffect(() => {
    const targetEl = document.getElementById("foobar")
    if ( targetEl?.children.length ) {
      return
    }

    const sendingThisData = <div><p>This is JSX from react</p><StatefulReactComponent /></div>
    console.log({sendingThisData})
    render(() => ReactInSolid({
      child: sendingThisData
    }), document.getElementById("foobar")!)
  }, [])
  
  return (
    <div id='foobar'></div>
  );
}
