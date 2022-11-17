import styles from "./Cookie.module.css"

const Cookie = ({clickCookie}) => {
  return( 
    <img src="./src/assets/img/cookie.webp" alt="cookie" className={styles.cookie} onClick={clickCookie}/>
  )
}

export default Cookie