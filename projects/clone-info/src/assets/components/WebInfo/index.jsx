import { useEffect } from "react"
import { postApi } from "../../../api/postApi.mjs"
import Content from "../Content"
import Header from "../Header"
import Navbar from "../Navbar"
import "./index.css"

const WebInfo = () => {
  useEffect(() => {
    (async () =>{
      try {
        const res = await postApi.getAll()
        hienthidata(res.data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])


  function hienthidata(data) {

  }

  return (
    <>
      <Header></Header>
      <main>
        <Navbar></Navbar>
        <Content></Content>
      </main>
    </>
  )
}

export default WebInfo
