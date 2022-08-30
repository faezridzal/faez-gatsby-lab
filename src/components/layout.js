import React from "react"
import Footer from "./footer"
import Header from "./header"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="p-2 mx-auto container w-auto border-box">
      <Header />
      <main>{children}</main>
      <aside>
        <figure className="p-6 shadow-sm rounded-md  bg-gray-300  my-6">
          <blockquote className="text-xl text-gray-600 ">
            "We here at Acme Inc. understand that it is better to leverage
            efficiently than to benchmark extensibly."
          </blockquote>
          <figcaption>
            -Anders Reinfeld, <em>CEO</em>
          </figcaption>
        </figure>
      </aside>
      <Footer />
    </div>
  )
}
