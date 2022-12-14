import { useEffect, useState } from "react";

export default function Web() {

  const [ mounted, setMounted ] = useState({
    Component: null as null | (() => JSX.Element)
  })
  useEffect(() => {
    import('../src/SolidContainer').then(({SolidContainer}) => {
      setMounted({
        Component: SolidContainer
      })
    })
    
  }, [])

  const { Component } = mounted

  return (
    <>
      {Component ? <Component /> : "loading"}
    </>
  );
}
