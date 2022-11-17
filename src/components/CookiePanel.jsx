import Cookie from "./Cookie"
import BoxInformation from "./BoxInformation"
import { useEffect, useState } from "react"

const CookiePanel = () => {
  let [cookie, setCookie] = useState(0)
  let [cookiePerSecond, setCookiePerSecond] = useState(1)


  return (
  <div>
    <BoxInformation numberCookies={cookie} cookiePerSecond={cookiePerSecond}></BoxInformation>
    <Cookie clickCookie={()=>{
      setCookie(cookie + 1) 
    }}></Cookie>
  </div>)
}

export default CookiePanel