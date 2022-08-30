import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

export default function NotFound() {
  return (
    <Layout>
      <PageTitle>Page Not Found</PageTitle>
      <p>
        Sorry we were not able to find the page you requested. Click the site
        logo to try again.
      </p>
    </Layout>
  )
}
