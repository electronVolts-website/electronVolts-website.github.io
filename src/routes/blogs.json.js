//this endpoint is going to return all the paths of the blog, in order with date

//fricking bug with vite, gonna fix this later
import { promises as fs } from 'fs'
import fm from 'front-matter'
import dayjs from 'dayjs'


export const get = async () => {
    

    let files = await fs.readdir('src/blog')
    let blogData = []

    for(const file of files){
        
        let blog = await fs.readFile(`src/blog/${file}`, 'utf-8')
        //console.log(blog)
        //this gets it into an object with front matter stuff
        let metadataFrontMatter = fm(blog)
        console.log(metadataFrontMatter)
        //console.log(metadataFrontMatter.attributes.date)

        //console.log(metadataFrontMatter)
        // let rawText = await remark().use(strip).process(metadataFrontMatter.body) 
        // console.log(rawText.value)
        const blogJSON = {
            title: metadataFrontMatter?.attributes?.title,
            desc: metadataFrontMatter?.attributes?.description,
            unixDate: dayjs(metadataFrontMatter.attributes.date).unix(),
            date: dayjs(metadataFrontMatter.attributes.date).format('MM-DD-YYYY'),
            body: metadataFrontMatter?.body,
        }
        

        blogData.push(blogJSON)
        
    }
    blogData.sort((a, b) => b.unixDate - a.unixDate)
    //console.log(blogData)
    //why do i need stringify?
    //files = JSON.stringify(files)

    return { body: blogData }
    
}

get()