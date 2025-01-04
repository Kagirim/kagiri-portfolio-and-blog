import ProjectCard from '../partials/projectCard'; // Import the projectCard component

export default function Projects({ projects }: { projects: any[] }) {
  return (
    <section>
        <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold  text-slate-300">Projects</h1>
        {projects.map((project) => (
            <ProjectCard project={project} /> // Use the imported component as a JSX element
        ))}
    </section>
  )
}
