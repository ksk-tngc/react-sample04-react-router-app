/*
  Component (Menu1)
*/

// React
import React from 'react'

// コンポーネント定義
export const Menu1 = () => {
  return (
    <>
      <h4 className="main-header-title">メニュー1</h4>

      <div className="main-header">
        <div className="main-header-row">
          <div className="main-header-item">
            <label htmlFor="main-header-input1">検索条件1：</label>
            <input id="main-header-input1" />
          </div>
          <div className="main-header-item">
            <label htmlFor="main-header-input2">検索条件2：</label>
            <input id="main-header-input2" />
          </div>
        </div>
        <div className="main-header-row">
          <div className="main-header-item">
            <button>検索</button>
          </div>
        </div>
      </div>

      <hr className="main-hr" />

      <div className="main-contents">
        <p>ここに検索結果が表示されます。。。</p>
      </div>
    </>
  )
}
