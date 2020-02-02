/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import './layout.css'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
