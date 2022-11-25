import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { STAGES } from '../../configs/consts';
import TasksStage from '../TasksStage/TasksStage';

export default function TasksPage(props: any) {

   const params = useParams()
   let projectId: number;

   if (params.id !== undefined) {
      projectId = +params.id


      return (
         <>
            <nav>
               <Link to='/' >Choose Project</Link>
            </nav>
            <h3>Project: {props.projects[projectId].title}</h3>
            <div className="tasks-page__wrapper">
               <TasksStage name={STAGES.QUEUE} projectId={projectId} />
               <TasksStage name={STAGES.DEVELOPMENT} projectId={projectId} />
               <TasksStage name={STAGES.DONE} projectId={projectId} />
            </div>

         </>
      )
   } else return (
      <div>
         <nav>
            <Link to='/' >Choose Project</Link>

         </nav>
      </div>
   )


}
