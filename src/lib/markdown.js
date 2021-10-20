import unified from 'unified'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
export let processMarkdown = async (rawJSON) => {
    //console.log(rawJSON)
    console.log("bruh")

    let parser = unified()
        .use(remarkParse)
        .use(remarkGfm)
    let tree = parser.parse(rawJSON.body)
    let processor = unified()
        .use(remark2rehype)
        .use(rehypeStringify)
        .use(rehypeHighlight)
    rawJSON.body =  await processor.run(tree)
    //console.log(tree)
    rawJSON.body = processor.stringify(rawJSON.body)
    //console.log(rawJSON.body)
    //let content = processor.run(rawJSON.body)
    return rawJSON
}