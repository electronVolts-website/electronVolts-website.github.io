<!-- this file takes a param which corresponds to the file name, and display it to markdown -->

<script context="module">
    
export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const blog = await fetch(`${slug}.json`).then((r) => r.json());
    return {
        props: { blog }
    }
}
</script>


<script>
    export let blog
</script>

<div>
    <div id="blogCard" class="bg-gray-50 rounded-xl p-8">
        <div class="font-bold text-3xl pb-4">
            {blog.title}
        </div>
        <div class="font-medium text-lg pb-4">
            {blog.date}
        </div>
        <div class="font-medium text-base pb-4 text-gray-600">
            {blog.desc}
        </div>
        <div class="prose">
            {@html blog.body}
        </div>
        
    </div>
    
</div>