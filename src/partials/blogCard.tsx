import Divider from "./divider"

export default function BlogCard({ blog: { isFeature, title, description, tags, date }}: { blog: { isFeature: boolean, title: string, description: string, tags: string[], date: string }}) {
    if(isFeature) {
        return (
            <article className="pt-8 col-span-2 px-32">
                <blockquote>
                    <h1 className="text-bold text-darkBlue text-3xl capitalize">{ title }</h1>
                    <p className="text-darkBlue">{ description }</p>
                    <span className="text-slate-300 pt-12">{ date }</span>
                </blockquote>

                <div className="container mt-12 px-4 md:px-12 mx-auto">
                    <hr className="h-px bg-slate-300 boder-0 dark:bg-slate-200"></hr>
                </div>
            </article>
        )
    }
    return (
        <article className="pt-8 px-8">
            <blockquote>
                <h1 className="text-bold text-darkBlue text-xl capitalize"><a href="https://kagirim.github.io/blog-single.html">{ title }</a></h1>
                <p className="text-darkBlue">{ description }</p>
                <span className="text-slate-300 pt-12">{ date }</span>
            </blockquote>

            <div className="container mt-12 px-4 md:px-12 mx-auto">
                <hr className="h-px bg-slate-300 boder-0 dark:bg-slate-200"></hr>
            </div>
        </article>
    )
}