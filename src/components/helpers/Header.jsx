import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link>To-Dos</Link>
            <Link>Usuarios</Link>
        </nav>
    </header>
  )
}

export default Header