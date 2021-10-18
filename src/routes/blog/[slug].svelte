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
    {blog.body}
</div>