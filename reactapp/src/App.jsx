import { useEffect, useState } from "react"

import Loader from "./componets/loader/Loader"
function App() {

  const [imagem, setImagem] = useState()

  useEffect(() => {
    getImagem()
  }, [])

  const getImagem = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()

    setImagem(data)


  }
  return (
    <div className="App">

      {/* {typeof (imagem) === "undefined" ?
        <Loader/> :
        <img src={imagem.message}></img>
      } */}
      <Loader/>
    </div>
  )
}
export default App
