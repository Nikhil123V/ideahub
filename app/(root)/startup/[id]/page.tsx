import React, {Suspense} from 'react';
import {client} from "@/sanity/lib/client";
import {STARTUP_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

const md = markdownit();
//Markdown, a simple yet powerful markup language, can significantly streamline content creation in Next.js applications. By combining the simplicity of Markdown with Next.js's robust features, you can create dynamic, SEO-friendly, and visually appealing web experience

// Directly in MDX Files:

// MDX: MDX is a superset of Markdown that allows you to embed JSX components directly within your Markdown files. This provides flexibility to mix static content and dynamic components

export const  experimental_ppr=true;
const Page =async ({params}:{params:Promise<{id:string}>}) => {
    const id=(await params).id;

    const post=await client.fetch(STARTUP_BY_ID_QUERY,{id});

    if(!post) return  notFound()
    const parsedContent = md.render(post?.pitch || "");
    return<>
        <section className='pink_container !min-h-[230px]'>
            <p className='tag'>{formatDate(post?._createdAt)}</p>

            <h1 className='heading'>{post.title}</h1>
            <p className='sub-heading !max-w-5xl'>
                {post.description}
            </p>

        </section>
        <section className="section_container">
            <img
                src={post.image}
                alt="thumbnail"
                className="w-full h-auto rounded-xl"
                width={24}
                height={20}
            />

            <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                <div className="flex-between gap-5">





                    <p className="category-tag">{post.category}</p>
                </div>
                <hr className='divider'/>
                <h3 className='text-30-bold'>Pitch Details</h3>
                {parsedContent ? (
                    <article
                        className="prose max-w-4xl font-work-sans break-all"
                        dangerouslySetInnerHTML={{__html: parsedContent}}
                    />
                    //In Next.js, the dangerouslySetInnerHTML attribute is a powerful but potentially risky way to render HTML directly into a component. It allows you to inject arbitrary HTML into a component, bypassing Next.js's built-in security measures.

                    // Why __html is Necessary:

                    /*  The __html property is a specific key used to signal to React that the value associated with it should be treated as raw HTML. This is crucial because React, by default, escapes HTML characters to prevent potential cross-site scripting (XSS) attacks.

                      //When to Use dangerouslySetInnerHTML:

                      While it's a powerful tool, dangerouslySetInnerHTML should be used with extreme caution and only when necessary. Here are some scenarios where it might be appropriate:*/
                ) : (
                    <p className="no-result">No details provided</p>
                )}
            </div>
            <hr className='divider'/>
            <Suspense fallback={<Skeleton className="view_skeleton" />}>
                <View id={id} />
            </Suspense>

        </section>
    </>

};
export default Page
