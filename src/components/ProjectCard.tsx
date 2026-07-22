import type { Project } from "@content/projects";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass flex h-full flex-col gap-6 p-7 md:p-9">
      <header>
        <p className="font-mono text-xs tracking-wide text-ink-dim">{project.kind}</p>
        <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-xs text-tq-400">{project.tags.join(" · ")}</p>
      </header>

      <p className="text-ink-dim">{project.summary}</p>

      <ul className="flex flex-col gap-2.5 pl-5 text-sm text-ink-dim marker:text-tq-500 [list-style-type:square]">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {project.metric && (
        <p className="rounded-lg border border-tq-500/30 bg-tq-500/5 px-4 py-3 font-mono text-sm text-tq-400">
          {project.metric}
        </p>
      )}

      <footer className="mt-auto flex flex-col gap-4">
        <p className="font-mono text-xs leading-relaxed text-ink-dim">
          {project.stack.join(" · ")}
        </p>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-tq-400 transition-colors hover:text-tq-500"
          >
            <GithubIcon className="h-4 w-4" />
            View repository
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </footer>
    </article>
  );
}
