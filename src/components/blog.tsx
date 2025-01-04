import BlogCard from '../partials/blogCard'

export default function Blog({ blogs }: {blogs: any[]}) {
    return (
        <section>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold text-slate-300">My Blog</h1>
            <div className="grid grid-cols-2 gap-4 place-items-center border border-slate-100 m-8 mx-48 text-center font-mono shadow-md">
                { blogs.map( function(blog){ return <BlogCard blog={ blog }/> })}
            </div>
        </section>
    )
}