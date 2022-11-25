import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectItem(props: any) {



  return (
    <Link to={`/projects/${props.id}`}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Link>
  )
}
