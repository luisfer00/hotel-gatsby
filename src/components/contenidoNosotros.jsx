import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const Contenido = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const ContenidoNosotros = () => {
  const {
    allDatoCmsPagina: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
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
    contenido,
    imagen: { gatsbyImageData: imagen },
    titulo,
  } = nodes[0]

  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>

      <Contenido>
        <p>{contenido}</p>
        <GatsbyImage image={imagen} alt="Imagen Nosotros" />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
