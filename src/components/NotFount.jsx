/*
  Component (NotFount)
*/

// React
import React from 'react'

// コンポーネント定義
export const NotFount = (props) => {
  const { menuId } = props

  return (
    <div>
      😔 Sorry... the page with menu id <b>{menuId}</b> is NOT FOUNT.
    </div>
  )
}
