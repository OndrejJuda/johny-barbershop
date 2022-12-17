import React from 'react'

const HeadingTertiary = ({ text }) => {
  return (
    <h3
      className='uppercase text-2xl tracking-[0.3em] text-primary-50 font-thin order-1'
    >
      {text}
    </h3>
  )
}

export default HeadingTertiary