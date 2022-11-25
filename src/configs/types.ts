export type Tasks = {
   id: Number,
   title: string,
   description: string,
   creationDate: Date,
   lifetime: number,
   endDate: Date,
   priority: Number,
   files: [],
   status: string,
   subtasks: [],
   comments: []
}

export type Project = {
   id: Number,
   title: string,
   description: string,
   tasksList: Tasks[]
}