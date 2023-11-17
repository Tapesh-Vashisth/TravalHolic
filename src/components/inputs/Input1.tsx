import React from 'react'

interface props {
    placeholder: string,
    icon: React.JSX.Element
}

function Input1(props: props) {
  return (
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            {props.icon}            
        </div>
        <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-200 focus:border-blue-200 block w-full ps-10 p-2.5" placeholder={props.placeholder} />
    </div>
  )
}

export default Input1