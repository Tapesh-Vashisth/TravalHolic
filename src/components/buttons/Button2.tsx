import React from 'react'

interface props {
    text: string,
    backgroundColor: string,
    fontColor: string
}

function Button2(props: props) {
  return (
    <button className='button2' style={{backgroundColor: props.backgroundColor, color: props.fontColor}}>
        {props.text}
    </button>
  )
}

export default Button2