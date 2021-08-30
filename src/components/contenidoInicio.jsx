import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  p {
    line-height: 2;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const ContenidoInicio = () => {
  const {
    allDatoCmsPagina: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const {
    titulo,
    contenido,
    imagen: { gatsbyImageData },
  } = nodes[0]

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <GatsbyImage image={gatsbyImageData} alt="hola" />
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
