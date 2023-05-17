import { useEffect, useState } from "react"
import { postApi } from "../../../api/postApi.mjs"
import Content from "../Content"
import Header from "../Header"
import Navbar from "../Navbar"
import "./index.css"

const WebInfo = () => {
  const [pageList, setPageList] = useState([])

  const parentPageList = pageList.filter((page) => page.parentId === null)
  useEffect(() => {
    (async () => {
      try {
        const res = await postApi.getAll()
        const pages = res.data.rows
        setPageList(pages)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])





  return (
    <>
      <Header></Header>
      <main>
        <Navbar></Navbar>
        <Content pageData={pageList} parentPageData={parentPageList}></Content>
      </main>
    </>
  )
}

export default WebInfo
