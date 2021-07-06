import React from 'react'

const Nav = ({ restMenu }) => {
  const { item, submenu } = restMenu || {}
  console.log('NAV', restMenu)
  
  return <>
    <li className="group px-4 relative">
      <a href="" 
        className={`lg:border-t-2  lg:py-1 lg:border-transparent lg:hover:border-white lg:hover:text-red-500
          ${submenu ? 'lg:border-b-4' : 'lg:border-b-2'} transition duration-500 ease-in-out`}>
            {item}
      </a>

        {submenu && <div className="absolute top-7 right-0 left-1 flex justify-center">
          {/* Tringle */}
          <div className="hidden  w-3 overflow-hidden lg:inline-block">
            <div className="h-1.5 w-1.5 bg-white -rotate-45 transform origin-top-left"></div>
          </div>
        </div>}
        <ul className={`static lg:hidden group-hover:block lg:absolute w-full lg:w-28 leading-8 p-2 pt-0 top-8 lg:bg-black`}>
          {submenu && submenu.map(({ id, item, submenu }) => (
            <li key={id}>
              <a href="" className="lg:hover:text-red-500 text-xs lg:text-xsm text-center transition duration-500 ease-in-out">
                {item}
              </a>
            </li>
          ))}
        </ul>
    </li>
  </>
}

export default React.memo(Nav)