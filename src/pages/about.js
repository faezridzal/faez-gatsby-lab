import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"
import aboutPhoto from "../images/about-photo.png"

export default function About() {
  return (
    <Layout>
      <PageTitle>About</PageTitle>
      <img
        className="rounded-md shadow-md"
        style={{ width: "600px", height: "300px" }}
        src={aboutPhoto}
        alt="corporate building"
      />
      <p className="mt-10 mr-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam
        mollitia ut, odit suscipit velit molestias, ratione vel minus iure esse!
        Nam autem vitae distinctio minima facere. Consectetur, error molestiae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias mollitia
        facilis, saepe quod minus a fuga molestias dolores eveniet error nobis
        quo ex odio, unde minima fugit, porro aut neque.
      </p>
    </Layout>
  )
}
