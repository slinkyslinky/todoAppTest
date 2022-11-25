import React from 'react'
import Nav from './components/Nav/Nav'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TasksPage from './components/TasksPage/TasksPage'
import { Project } from './configs/types'
import { STAGES } from './configs/consts'

export default function App() {


   const projects: Project[] = [
      {
         id: 0, title: "Firts", description: "It's a test project 1", tasksList: [
            { id: 1, title: 'first', description: "bla bla bla", status: STAGES.QUEUE, priority: 3, creationDate: new Date(), endDate: new Date(), lifetime: 50, subtasks: [], files: [], comments: [] },
            { id: 1, title: 'second', description: "something", status: STAGES.DEVELOPMENT, priority: 2, creationDate: new Date(), endDate: new Date(), lifetime: 50, subtasks: [], files: [], comments: [] },
         ]
      },
      {
         id: 1, title: "Second", description: "It's a test project 2", tasksList: [
            { id: 1, title: '123', description: "zxczxczxc123", status: STAGES.DEVELOPMENT, priority: 2, creationDate: new Date(), endDate: new Date(), lifetime: 50, subtasks: [], files: [], comments: [] }
         ]
      },

   ]
   localStorage.setItem('my-data', JSON.stringify(projects))



   return (
      <div className='app'>
         <header>
            <h1>To-Do App by Slinky</h1>
         </header>


         <Router>

            <div className="container">

               <Routes>
                  <Route path='/' element={<ProjectsPage projects={projects} />} />
                  <Route path={`/projects/:id`} element={<TasksPage projects={projects} />} />
                  {/* {projects.map(project =>
                     <Route path={`/project:${project.id}/tasks`} element={<TasksPage project={project} />} />
                  )} */}


               </Routes>
            </div>
         </Router>



         <footer></footer>
      </div>
   )
}
