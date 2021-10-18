//this endpoint is going to return all data for a specific blog,
//based on the slug

import {readBlog} from '$lib/readBlog'

export let get = async ({ params }) => {
    const { slug } = params
    //console.log(slug)
    let RawText = await readBlog(slug)
    


    return { body: RawText}

}