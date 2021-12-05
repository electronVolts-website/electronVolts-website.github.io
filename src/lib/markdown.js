import unified from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeFigure from 'rehype-figure'

export let processMarkdown = async (rawJSON) => {
    //console.log(rawJSON)
    console.log("started processing markdown")

    let parser = unified()
        .use(remarkParse)
        .use(remarkGfm)
    let tree = parser.parse(rawJSON.body)
    console.log('parse defined')
    let processor = unified()
        .use(remark2rehype)
        .use(rehypeFigure)
        .use(rehypeStringify)
        .use(rehypeHighlight)
    console.log('processor defined')
    console.log(tree['children'])
    rawJSON.body =  await processor.run(tree)
    console.log('processor ran')
    rawJSON.body = processor.stringify(rawJSON.body)
    //console.log(rawJSON.body)
    //let content = processor.run(rawJSON.body)
    return rawJSON
}