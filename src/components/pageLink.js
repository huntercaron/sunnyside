import React from 'react'
import { Link } from 'gatsby'

const PageLink = ({ link, title }) => (
  <div
    style={{
      fontSize: '36px',
      marginLeft: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-.05rem',
    }}
  >
    <Link to={link}>{title} &rarr;</Link>
  </div>
)

export default PageLink
