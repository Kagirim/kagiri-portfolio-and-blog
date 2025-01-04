
import CategoryCard from "../partials/categoryCard"

export default function Categories({ categories }: { categories: any[] }) {
    return (
        <div className="container px-4 md:px-12 mx-auto">
            
            <h1 className="mb-8 text-2xl md:text-4xl text-center font-extrabold  text-slate-300">About Me</h1>
            <section className="font-mono">
                <blockquote className="text-xl italic font-semibold text-center text-gray-900 dark:text-white">
                    <p className="text-slate-600">
                        I love to dig into customer problems and find suitable solutions. I like to create, scale and optimize business portfolios.
                        You will often find me around developer societies and groups in Nairobi, looking to learn and share knowledge. I am a big fan of open-source software and I am always looking for ways to contribute.
                    </p>
                </blockquote>
            </section>

            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900"></span>
            </div>
            
            <h1 className="mt-32 mb-8 text-2xl md:text-4xl text-center font-extrabold text-slate-300">Services</h1>
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-3 border rounded-lg shadow-md mb-32 md:p-6 text-center">
                { categories.map((category) => (
                    <CategoryCard category={category} />
                ))}
            </section>
        </div>
    )
}