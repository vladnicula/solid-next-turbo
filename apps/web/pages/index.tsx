import { useEffect, useState } from "react";
import { Button } from "ui";

import { render } from 'solid-js/web'
import { mutate } from "proxy-live-document";

const someGlobalState = { key: "initial key" }

// select(someGlobalState, ['/key'], (root) => {
//   console.log("we should see this")
// })

export default function Web() {

  const [ stateKey, setStateKey ] = useState("input value")

  useEffect(() => {

    console.log(mutate(someGlobalState, (state) => {
      state.key = stateKey
    }))

  }, [stateKey])

  useEffect(() => {
    const targetEl = document.getElementById("foobar")
    if ( targetEl?.children.length ) {
      return
    }

    import('solidjs-exploration').then((whatYougot) => {
      if ( targetEl?.children.length ) {
        return
      }
      render(() => whatYougot.Test({
        someGlobalState
      }), document.getElementById("foobar")!)
    })
  }, [])
  
  return (
    <div>
      <h1>Web</h1>
      <input type='text' value={stateKey} onInput={(ev) => {
        setStateKey((ev.target as HTMLInputElement).value)
      }} />
      <Button />
      <div id='foobar'></div>
    </div>
  );
}
