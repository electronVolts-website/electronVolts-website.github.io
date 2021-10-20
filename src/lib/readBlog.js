import { promises as fs } from 'fs'
import fm from 'front-matter'
import dayjs from 'dayjs'

export let readBlog = async (fileName) => {
    let blog = await fs.readFile(`src/blog/${fileName}.md`, 'utf-8')
    
    let metadataFrontMatter = fm(blog)
    
    //console.log(metadataFrontMatter)

    const blogJSON = {
        title: metadataFrontMatter?.attributes?.title,
        desc: metadataFrontMatter?.attributes?.description,
        unixDate: dayjs(metadataFrontMatter.attributes.date).unix(),
        date: dayjs(metadataFrontMatter.attributes.date).format('MM-DD-YYYY'),
        body: metadataFrontMatter?.body,
        path: fileName,
        thumbnail: metadataFrontMatter.attributes.thumbnail
    }
    //console.log(blogJSON)
    return blogJSON

}