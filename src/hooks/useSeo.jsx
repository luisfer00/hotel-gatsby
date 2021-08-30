import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import React from "react"

const useSeo = () => {
  const {
    datoCmsSite: {
      globalSeo: {
        siteName,
        titleSuffix,
        fallbackSeo: { description, title },
      },
    },
  } = useStaticQuery(graphql`
    query {
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            description
            title
          }
        }
      }
    }
  `)

  return { siteName, titleSuffix, description, title }
}

export default useSeo
