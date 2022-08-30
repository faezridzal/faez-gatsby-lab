import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { PageTitle } from "../components/page-title"

const Th = ({ children }) => {
  return (
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {children}
    </th>
  )
}

const Td = ({ children }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {children}
    </td>
  )
}

export default function Files({ data }) {
  return (
    <Layout>
      <PageTitle>Files</PageTitle>
      <table className="border border-gray-400 min-w-full leading-normal ">
        <thead>
          <tr>
            <Th>Relative PaTh</Th>
            <Th>Pretty Size</Th>
            <Th>File Type</Th>
            <Th>Created</Th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.nodes.map(file => (
            <tr key={file.id}>
              <Td>{file.relativePath}</Td>
              <Td>{file.prettySize}</Td>
              <Td>{file.extension}</Td>
              <Td>{file.birthTime}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      nodes {
        id
        relativePath
        prettySize
        extension
        birthTime(fromNow: true)
      }
    }
  }
`
