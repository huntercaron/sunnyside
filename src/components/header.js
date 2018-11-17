import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <h2>
    <Link to="/">{siteTitle}</Link>
  </h2>
)

export default Header
