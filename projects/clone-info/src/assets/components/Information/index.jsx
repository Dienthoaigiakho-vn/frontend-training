import React, { useState } from 'react'
import "./index.css"


const Information = ({ pageData, parentPageData }) => {
  const [infoClick, setInfoClick] = useState("guide");

  function renderPage(page) {
    if (page.parentId === null) {
      return (<>
        <li>
          <a onClick={() => handleClickPageParent(page.id)} className='group-title' >{page.name}</a>
        </li>
      </>)
    }
  }

  function handleClickPageParent(id) {
    const childPages = pageData.filter((page) => { return page.parentId === id });
    childPages.map(renderChildPage)
  }

  function renderChildPage(childPage) {
    console.log(childPage); //khuc nay dang lam cach nao de no render len component
  }


  return (
    <div className='information__container'>
      <h2>Thông tin</h2>

      <ul className='information__list'>{pageData.map(renderPage)}
        {/* <li className={`information_group ${infoClick === "introduction" ? "introduction-show" : ""}`}>
          <a onClick={() => setInfoClick("introduction")} className='group-title' >GIỚI THIỆU VỀ "GIÁ KHO"</a>
          <ul className='title-list'>
            <li><a>FACEBOOK | INSTAGRAM | YOUTUBE | ZALO PAGE</a></li>
            <li><a>Hệ thống Cộng tác viên Toàn Quốc</a></li>
            <li><a>VĂN HOÁ DOANH NGHIỆP CỦA GIÁ KHO</a></li>
            <li><a>HỢP TÁC CÙNG GIÁ KHO</a></li>
            <li><a>BÁN HÀNG CÙNG DOANH NGHIỆP</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  )
}

export default Information
