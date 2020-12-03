import * as React from 'react'

export function RoomsStaircase(props) {
  return (
    <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M27 28H11.414L28 11.414V27a1 1 0 01-1 1zM23 4h5v4.586L8.586 28H4v-5a1 1 0 011-1h5v-5a1 1 0 011-1h5v-5a1 1 0 011-1h5V5a1 1 0 011-1z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}
