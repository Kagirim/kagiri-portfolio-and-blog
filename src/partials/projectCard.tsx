

export default function ProjectCard({ project: { title, description, tags, link, linkIcon, starIcon, gitIcon }}: { project: { title: string, description: string, tags: string[], link: string, linkIcon: any, starIcon: any, gitIcon: any}}) {
  return (
    <section className="font-mono text-darkBlue">
        <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
            <a href={link}>
                <h1 className="text-xl text-center font-bold"> {title}{linkIcon} </h1>
            </a>
            <hr className="my-4" />
            <p className="">{description}</p>
            <div className="mt-4 mb-8 flex flex-wrap items-center gap-2">
                {tags.map((tag) => ( <div className="px-4 py-1 border-2 rounded-full">{tag}</div> ))}
            </div>
            <div className="flex flex-row space-x-2 justify-center text-center">
          <a href={link} className="flex items-center border rounded px-1 text-sm text-darkBlue font-bold bg-slate-100">
            {gitIcon}fork
          </a>
          <a href={link} className="flex items-center border rounded px-1 text-sm text-darkBlue font-bold bg-slate-100">
            {starIcon} star
          </a>
        </div>
      </div>

    </section>
  )
}