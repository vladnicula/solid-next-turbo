import { useEffect, useState } from "react";


export default function Web() {

  const [ mounted, setMounted ] = useState({
    Component: null as null | (() => JSX.Element)
  })
  useEffect(() => {
    import('../src/ReactInSolidContainer').then(({ReactInSolidContainer}) => {
      setMounted({
        Component: ReactInSolidContainer
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
