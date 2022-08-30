import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

export const NavLink = ({ children, to }) => {
  return (
    <Link
      className="mx-0 p-5 text-gray-600 text-lg hover:text-gray-800 hover:border-2 hover:border-solid hover:border-gray-800"
      to={to}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="pt-5 pb-10 border-b-2 border-solid border-gray-600">
      <Link to="/" className="text-4xl mx-4">
        {data.site.siteMetadata.title}
      </Link>
      <nav className="inline">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}
