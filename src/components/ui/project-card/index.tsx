import { Link } from ".."
import { ProjectModel } from "../../../models/project"

type ProjectCardProps = {
  data: ProjectModel
}
export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { description, html_url, language, name } = data
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-neutral-950 border border-neutral-800 px-4 py-3 min-w-[280px] h-[140px]">
      <div className="flex-1">
        <h2 className="font-heading font-bold truncate">{name}</h2>
        {description && (
          <p className="truncate text-sm">{description}</p>
        )}
        {language && (
          <p className="text-sm">Principal Linguagem:{" "}
            <span className="text-accent">{language}</span>
          </p>
        )}
      </div>
      <Link className="text-sm" href={html_url}>Repositório</Link>
    </div>
  )
}