<script>

    
    //ignore this "unused" bruh moment
    export let blogs
</script>

<script context="module">

import { base } from '$app/paths'


export async function load({ fetch }) {

    const res = await fetch(`${base}/blogs.json`)
    const blogs = await res.json()
    return {
        props: { blogs }
    }
}

</script>




<div class="flex flex-col space-y-2 bg-gray-100 rounded-xl p-3 mt-2">
    {#each blogs as blog}
        <div id="blogCard" class="bg-gray-200 rounded-xl p-8">
            <div class="font-bold">
                {blog.title} 
            </div>
            
            <br/>
            <div class="text-gray-600 font-medium">
                {blog.desc}
            </div>
            <div class="text-gray-600 font-medium">
                {blog.date}
            </div>
        </div>
        
    {/each}
</div>