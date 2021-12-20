import { useEffect } from "react"
import { JSRender } from "../src/component/JSRender"

const Index = () => {

  useEffect(() => {
    document.title = "Render"
    new JSRender()
  },[])

  return (

      //<h1>Hello</h1>
      <canvas id="WebGL"></canvas>

    )
}

export default Index