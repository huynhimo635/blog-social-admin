import { useState } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import _ from 'lodash'

import { API_URL } from '../../utils/constant'

const menu = [
  {
    name: 'Dashboard',
    href: API_URL.dashboard
  },
  {
    name: 'Categories',
    href: API_URL.category
  },
  {
    name: 'Users',
    href: API_URL.user
  }
]

function SideBar() {
  const [active, setActive] = useState(0)

  const handleChange = (index) => {
    setActive(index)
  }

  return (
    <div className="h-full w-[260px] border-r-2 shadow-lg flex-none p-1">
      <div className="h-[80px] w-full flex items-center justify-center">
        <h1 className="font-mono text-3xl">Blog</h1>
      </div>
      <ul className=" flex flex-col justify-start items-center h-4/5 mx-2 capitalize">
        {_.map(menu, (item, index) => (
          <Link
            key={index}
            to={item.href}
            className={clsx(
              'p-3 rounded-lg w-full mb-2 transition-all',
              active === index
                ? 'text-main_color bg-secondary_bg border-r-4 border-main_color'
                : 'text-secondary_text hover:bg-third_bg '
            )}
            onClick={() => handleChange(index)}
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
