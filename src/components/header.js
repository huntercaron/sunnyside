import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle, pageTitle }) => (
  <h1>
    <Link to="/">{siteTitle}</Link>
    {pageTitle && <div style={{ marginLeft: "3rem" }}> &rarr; {pageTitle}</div>}
  </h1>
)

export default Header
