import { FC, useState } from 'react'

const Youtobe: FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className='cursor-pointer'
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onClick={() => {
        window.open('https://youtube.com/@admeta_network', '_blank')
      }}
    >
      <svg
        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.4516 5.81025C24 7.815 24 12 24 12C24 12 24 16.185 23.4516 18.1898C23.1468 19.2979 22.2552 20.1698 21.126 20.4645C19.0752 21 12 21 12 21C12 21 4.9284 21 2.874 20.4645C1.74 20.1653 0.8496 19.2945 0.5484 18.1898C3.57628e-08 16.185 0 12 0 12C0 12 3.57628e-08 7.815 0.5484 5.81025C0.8532 4.70213 1.7448 3.83025 2.874 3.5355C4.9284 3 12 3 12 3C12 3 19.0752 3 21.126 3.5355C22.26 3.83475 23.1504 4.7055 23.4516 5.81025ZM9.6 15.9375L16.8 12L9.6 8.0625V15.9375Z"
          fill={hover ? '#ffffff' : '#A6A4AF'}/>
      </svg>
    </div>

  )
}

export default Youtobe
