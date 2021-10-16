//this endpoint is going to return 

// import { writable } from 'svelte/store'
// import {toVFile, readSync} from 'to-vfile'
// import { findDown } from 'vfile-find-down'
// import fm from 'front-matter'


// export const blogs = writable(0)

export let get = ({ params }) => {
    const { slug } = params

    
    
    

}

// const readMarkdown = async () => {
//     //this function reads all the data and goes brrr
//     let markdownJSON = []


//     blog.set("bruh")
//     findDown('.md')
//     // try {
//     //     const files = await readdir('src/blog')

//     //     //for loop here so it doesnt do everything at once
//     //     for(const fileName of files){
//     //         console.log(fileName)
//     //         const fileContent = await readFile(`src/blog/${fileName}`, 'utf8')
//     //         markdownJSON.push(fm(fileContent))
//     //         console.log(fileContent)
//     //     }
//     //     console.log(markdownJSON)
//     //     blogs.set(markdownJSON)
//     // }catch (err){
//     //     console.error(err)
//     // }
    
// }

// readMarkdown()