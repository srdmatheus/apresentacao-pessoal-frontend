import { useEffect, useState } from "react"
import { ProjectModel } from "../../../models/project"
import { ProjectCard } from "../../../components"

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<ProjectModel[]>()

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("https://api.github.com/users/srdmatheus/repos")
      const data = await response.json()

      const sortedData = data.sort((a: ProjectModel, b: ProjectModel) => 
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

      setProjects(sortedData);
    }

    fetchProjects()
  })
  return (
    <section className="py-8">
      <h2 className="text-2xl font-heading font-bold tracking-tight">Meus projetos recentes</h2>
      <div className="flex gap-4 overflow-x-scroll py-10">
        {projects?.map(project => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </section>
  )
}