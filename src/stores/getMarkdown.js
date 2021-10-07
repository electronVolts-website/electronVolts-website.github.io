import { writable } from 'svelte/store'


import fs, { read } from 'fs'

export const blogs = writable([])

let readData = []

const readMarkdown = async () => {
    
    fs.readdir('src/blog', (err, files) => {
        if(err){
            console.log(err)
        }
        console.log('bruh')
        files.forEach(file => readData.push(file))
        console.table(readData)
        console.table(blogs)
    })
}

readMarkdown()