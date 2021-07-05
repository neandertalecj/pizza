import React, { useEffect, useRef, useState } from "react"
import Nav from "./Nav"


const Header = ({ menu, logoUrl, franchise }) => {
  const [menuMode, setMenuMode] = useState(false)
  const refImg = useRef(null)
  const refHeader = useRef(null)
  const refFranch = useRef(null)


  useEffect(() => {
    // This functionality uses window object and must be executed in a browser only 
    const onScroll = () => {
      const scroll = window.scrollY
      if (scroll > 50) {
        refImg.current.classList.remove('logo-base')
        refImg.current.classList.add('logo-scroll')

        refHeader.current.classList.add('bg-opacity-80')

        refFranch.current.classList.add('p-0')
        refFranch.current.classList.remove('franch-base')
        refFranch.current.classList.add('franch-scroll')
      } else {
        refImg.current.classList.remove('logo-scroll')
        refImg.current.classList.add('logo-base')

        refHeader.current.classList.remove('bg-opacity-80')

        refFranch.current.classList.remove('franch-scroll')
        refFranch.current.classList.add('franch-base')
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  })

  const handleMenu = () => {
    setMenuMode(!menuMode)
  }

  return <div >
    <header className="fixed right-0 left-0 z-50">
      <div ref={refFranch} className="bg-red-700 text-white uppercase text-center font-bold text-md md:text-2xl tracking-wider franch-base">
        {franchise}
      </div>

      <div ref={refHeader} className="bg-black">
        <div className="container px-4 mx-auto flex justify-between items-center flex-col lg:flex-row">

          {/* Logo  */}
          <div>
            <a href="">
              <img ref={refImg} className="logo-base" src={logoUrl} alt="logo" />
            </a>
          </div>

          <div className="relative w-full lg:w-auto">{/* */}

            {/* Hamburger */}
            <div className={`bg-red-700 lg:hidden w-full flex justify-center p-1  mb-2 ${menuMode && 'border-b-4'}`}>
              <span onClick={handleMenu}>
                <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </span>
            </div>

            {/* Menu */}
            <ul 
              className={`absolute top-9 lg:static text-center w-full lg:w-auto lg:flex lg:justify-between bg-red-700 lg:bg-transparent uppercase text-lg leading-8 lg:text-sm text-white font-oswald 
              ${menuMode ? 'flex flex-col' : 'hidden'}`}
            >
              {menu?.map(({ id,  ...restMenu }) => ( //item, submenu
                <Nav  key={id} restMenu={restMenu}  />
              ))}
            </ul>
          </div>

        </div>
      </div>
    </header>
   <div className="pt-159 md:pt-241 lg:pt-191"></div> {/* 191  style={{paddingTop: '159px'}}*/}
  </div>
}

export default Header