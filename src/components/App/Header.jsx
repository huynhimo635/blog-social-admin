/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'

import Card from '../Common/Card'

function Header() {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, isOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <Card className="h-16 mb-4 flex justify-between items-center shadow-md">
      <h1 className="font-mono text-3xl">Blog</h1>
      <div className="w-9 relative">
        <button type="button" onClick={toggle}>
          <img
            src="https://cf.shopee.vn/file/96fdcd65ef075b128f36c289a62723db_tn"
            alt=""
            className="rounded-[50%]"
          />
        </button>
        <div
          className={clsx(
            'w-20 absolute top-full left-[25%] h-full z-50 rounded-md',
            isOpen ? 'flex' : 'display-none'
          )}
          ref={ref}
        >
          <ul>
            <Link to="/asd">
              <li className="py-2 px-3 bg-white border-b-2 hover:bg-secondary_bg">Profile</li>
            </Link>
            <Link to="/login" onClickCapture={handleLogout}>
              <li className="py-2 px-3 bg-white hover:bg-secondary_bg">Log out</li>
            </Link>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default Header
