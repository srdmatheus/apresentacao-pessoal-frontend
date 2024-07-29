import { Link } from "..";
import { ProjectModel } from "../../../models/project";

type ProjectCardProps = {
  data: ProjectModel;
};
export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { description, html_url, language, name } = data;
  return (
    <div className="flex h-[140px] min-w-[280px] flex-col gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3">
      <div className="flex-1">
        <h2 className="truncate font-heading font-bold">{name}</h2>
        {description && <p className="truncate text-sm">{description}</p>}
        {language && (
          <p className="text-sm">
            Principal Linguagem: <span className="text-accent">{language}</span>
          </p>
        )}
      </div>
      <Link className="text-sm" href={html_url}>
        Repositório
      </Link>
    </div>
  );
};
