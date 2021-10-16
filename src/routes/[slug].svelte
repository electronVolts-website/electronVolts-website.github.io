

<script context="module">
    export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const blog = await fetch(`${slug}.json`).then((r) => r.json());
    return {
      props: { blog }
    };
  }
</script>


<script>
    export let blog
</script>
