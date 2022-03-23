import React, { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const background = rgb.join(',')
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `rgb(${background})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>
        {hexValue} {alert && <span className='alert'>copied!</span>}
      </p>
    </article>
  )
}

export default SingleColor
