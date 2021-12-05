//this endpoint is going to return all data for a specific blog,
//based on the slug

import { readBlog } from '$lib/readBlog'
import { processMarkdown } from '$lib/markdown'
//bruh vite doesnt work with pure ESM modules

export let get = async ({ params }) => {
    const { slug } = params
    //console.log(slug)
    let rawJSON = await readBlog(slug)
    rawJSON = await processMarkdown(rawJSON)
    
    return { body: rawJSON}

}