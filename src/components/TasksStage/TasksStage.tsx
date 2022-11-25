import React from 'react'
import { Project, Tasks } from '../../configs/types'
import Task from '../Task/Task'

export default function TasksStages(props: any) {

   const myData = localStorage.getItem("my-data")
   let filteredTasks: Tasks[] = []

   if (myData !== null) {
      const projects: Project[] = JSON.parse(myData)
      const tasks: Tasks[] = projects[props.projectId].tasksList
      filteredTasks = tasks.filter(task => task.status === props.name)


   }







   return (
      <div className='tasks-stage'>
         <h4>
            {props.name}
         </h4>
         {
            filteredTasks.map(task =>
               <Task
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  status={task.status}
                  priority={task.priority}
                  creationDate={task.creationDate}
                  endDate={task.endDate}
                  lifetime={task.lifetime}
                  subtasks={task.subtasks}
                  files={task.files}
                  comments={task.comments}
               />)
         }

      </div>
   )
}

