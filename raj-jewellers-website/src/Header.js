import React from 'react'
import './Header.css'
import Logo from './Images/Logo.png'
function Header() {
  return (
    <div>
      <div className="header">
<img className="header-logo"src={Logo} alt="Logo is not processed" />
     
<div className="header-optionList">
<div className="header-option">
  <span className='header-optionLine'>New Arrivals</span>
</div>
<div className="header-option">
<span className='header-optionLine'>Jewellery</span>
</div>
<div className="header-option">
<span className='header-optionLine'>Collections</span>
</div>
<div className="header-option">
<span className='header-optionLine'>Sale</span>
</div>
  </div>   


     <div className="header-search">
      <input className='header-searchInput' type="type"/>
      {/* Logo for search here */}
     </div>

     <div className="header-nav">
     <div className="header-nav-option">
  <span className='header-optionOneLine'>Hello Guest </span>
  <span className='header-optionTwoLine'>Sign in</span>

</div>
     <div className="header-nav-option">
     <span className='header-optionOneLine'>Orders</span>
</div>
     </div>
      </div>
    </div>

  )
}

export default Header
