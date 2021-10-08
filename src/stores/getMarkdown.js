import { writable } from 'svelte/store'
import {readdir, readFile} from 'fs/promises'
import fm from 'front-matter'

export const blogs = writable([])


const readMarkdown = async () => {
    let markdownJSON = []

    try {
        const files = await readdir('src/blog')

        //for loop here so it doesnt do everything at once
        for(const fileName of files){
            console.log(fileName)
            const fileContent = await readFile(`src/blog/${fileName}`, 'utf8')
            markdownJSON.push(fm(fileContent))
            console.log(fileContent)
        }
        console.log(markdownJSON)
    }catch (err){
        console.error(err)
    }
    

    // fs.readdir('src/blog', (err, files) => {
    //     if(err)console.log(err)

    //     files.forEach(file => {
    //         //console.log(file)
    //         fs.readFile(`src/blog/${file}`, 'utf8', (error, data) =>{
    //             console.log(fm(data))
    //             readData.push(fm(data))
    //         })
    //     })
        
    // }).then( () => {
    //     return readData
    // })
    
}

readMarkdown()