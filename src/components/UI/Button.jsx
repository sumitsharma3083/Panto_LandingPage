import React from 'react'

const Button = ({key , style, ...rest}) => {
    
  return (
    <button key={key} style={style} onClick={rest.onClick}>
    {rest.children}
    </button>
  )
}

export default Button