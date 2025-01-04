

export default function category({ category: { icon, title, description } }: { category: { icon: any, title: any, description: any } }) {
    return (
        <div className="flex flex-wrap flex-col items-center justify-center px-1 md:px-6 font-mono">
            { icon }
            <h1 className="mt-4 text-xl font-bold text-darkBlue dark:text-gray-300">{ title }</h1>

            <p className="mt-2 text-darkBlue">{ description }</p>
        </div>
        
    )
}
