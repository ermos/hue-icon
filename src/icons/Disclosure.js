import * as React from 'react'

export function Disclosure(props) {
  return (
    <svg width={6} height={11} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M5.854 5.854l-5 5a.5.5 0 01-.708-.708L4.793 5.5.146.854A.5.5 0 01.854.146l5 5a.5.5 0 010 .708z'
        fill='#000'
        fillRule='nonzero'
      />
    </svg>
  )
}
