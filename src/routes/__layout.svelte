<svelte:head>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
</svelte:head>

<script>
    import MenuBar from '../lib/menuBar.svelte'
</script>
<div class="bg-gray-200">
    <div class="flex flex-row space-x-10 min-h-screen pt-4 container">
    <MenuBar/>
    <slot></slot>
    <div id="tweet"class="hidden sm:block sticky top-0 pr-8 w-1\/3 self-start place-self-end">
        <div class="rounded-2xl overflow-hidden shadow-lg max-w-xl">
            <a class="twitter-timeline" data-height="500" href="https://twitter.com/electronVoltFTC?ref_src=twsrc%5Etfw">Tweets by electronVoltFTC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</div>
</div>




<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    
    /* https://github.com/tailwindlabs/tailwindcss/issues/1460 */
    
</style>