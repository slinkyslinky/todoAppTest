import React from 'react'
import { Link } from 'react-router-dom'
import ListOfProjects from '../ProjectsList/ProjectsList'

export default function ProjectsPage(props: any) {


   return (
      <div>
         <nav>
            <Link to='/' >Last project</Link>

         </nav>
         <h2>Projects</h2>
         <ListOfProjects projects={props.projects} />

      </div>

   )
}
