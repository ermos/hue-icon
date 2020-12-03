import * as React from 'react'

export function BulbFoh(props) {
  return (
    <svg width={32} height={32} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16 2c6.627 0 12 .895 12 2v24c0 1.104-5.373 2-12 2s-12-.896-12-2V4c0-1.105 5.373-2 12-2zm9.6 24.366V10H6v16.366C6 27.268 10.588 28 16 28c5.413 0 9.6-.732 9.6-1.634zM10.492 20.34c1.617.494 3.976.657 5.509.657 1.533 0 3.89-.163 5.509-.657-.66 1.675-1.8 2.416-2.072 3.979-.118.68-.218.99-.152 1.684.042.444-.306.832-.762.878A25.46 25.46 0 0116 27c-.941 0-1.782-.046-2.524-.12-.456-.044-.803-.433-.761-.877.066-.695-.035-1.005-.153-1.684-.271-1.563-1.413-2.303-2.071-3.98zm-.31-1.688a5.765 5.765 0 01-.109-.587c-.026-.217-.073-.428-.073-.668C10 14.766 12.698 12 16 12c3.303 0 6 2.766 6 5.397 0 .24-.047.451-.072.668a5.765 5.765 0 01-.109.587c-.935.382-2.918.821-5.819.821-2.9 0-4.883-.439-5.818-.821z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}
