import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { css } from "@emotion/react"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: auto;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
`

const HabitacionPreview = ({ habitacion }) => {
  const {
    contenido,
    imagen: { gatsbyImageData: imagen },
    titulo,
    slug,
  } = habitacion

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagen} alt="imagen habitacion" />
      <div
        css={css`
          padding: 1rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
