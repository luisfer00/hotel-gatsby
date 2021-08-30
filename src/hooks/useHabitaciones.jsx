import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import React from "react"

const useHabitaciones = () => {
  const {
    allDatoCmsHabitacion: { nodes },
  } = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  return nodes.map(habitacion => ({
    titulo: habitacion.titulo,
    id: habitacion.id,
    imagen: habitacion.imagen,
    contenido: habitacion.contenido,
    slug: habitacion.slug,
  }))
}

export default useHabitaciones
