const BoxInformation = ({numberCookies, cookiePerSecond}) => {
  console.log(numberCookies)

  return (
    <>
      <h2>Samu's bakery</h2>
      <h3>{Math.floor(numberCookies)} cookies</h3>
      <p>per second: {cookiePerSecond}</p>
    </>
  )
}

export default BoxInformation