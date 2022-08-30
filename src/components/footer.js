import React from "react"

export const FooterLink = ({ children, to }) => {
  return (
    <a
      className="first:ml-0 mx-2 text-gray-600 hover:underline hover:text-red-400"
      href={to}
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer>
      <nav className="my-8">
        <FooterLink>Privacy</FooterLink>
        <FooterLink>Terms</FooterLink>
        <FooterLink>Careers</FooterLink>
        <span className="text-gray-400"> &#169; Acme Inc.</span>
      </nav>
    </footer>
  )
}
