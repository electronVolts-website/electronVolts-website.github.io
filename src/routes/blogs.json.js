//this endpoint is going to return all the paths of the blog, in order with date

//fricking bug with vite, gonna fix this later
import { promises as fs } from 'fs'
import { readBlog } from '$lib/readBlog'


export const get = async () => {

    let files = await fs.readdir('src/blog')
    let blogData = []

    for(const file of files){
        const fileNoExtension = file.slice(0, -3)
        blogData.push(await readBlog(fileNoExtension))
    }

    //sorts from biggest to smallest based on unix date
    blogData.sort((a, b) => b.unixDate - a.unixDate)
    //console.log(blogData)
    //console.log("blogData point")
    //why do i need stringify?
    //files = JSON.stringify(files)

    return { body: blogData }
    
}

