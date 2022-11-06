import { useEffect, useState } from "react";
import { Button } from "ui";

import { render } from 'solid-js/web'
import { mutate } from "proxy-live-document";

    
import { Test } from 'solidjs-exploration'

const someGlobalState = { key: "initial key" }

export const SolidContainer = () => {

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

    render(() => Test({
      someGlobalState
    }), document.getElementById("foobar")!)
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
