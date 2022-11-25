import React from 'react'
import { Project } from '../../configs/types'
import ProjectItem from '../ProjectItem/ProjectItem'

export default function ListOfProjects(props: any) {


   return (
      <div>
         {props.projects.map((project: Project) => <ProjectItem key={project.id} id={project.id} title={project.title} description={project.description} />)}
      </div>
   )
}
