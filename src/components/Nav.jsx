/*
  Component (Nav)
*/

// React
import React from 'react'
// Router
import { Link } from 'react-router-dom'

// コンポーネント定義
export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">🏠トップ</Link>
      </li>
      <li>
        <Link to="/Menu1">メニュー1</Link>
      </li>
      <li>
        <Link to="/Menu2">メニュー2</Link>
      </li>
      <li>
        <Link to="/Menu3">メニュー3</Link>
      </li>
    </ul>
  )
}
