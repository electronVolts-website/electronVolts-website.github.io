<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script>
    import MenuBar from '../lib/menuBar.svelte'
</script>

<div class="flex flex-row space-x-10 bg-gray-200 h-min-screen">
    <MenuBar/>
        <slot></slot>
    <div id="tweet"class="hidden sm:block sticky top-0 pr-8 w-1\/3 self-start place-self-end">
        <div class="rounded-2xl overflow-hidden shadow-lg max-w-xl">
            <a class="twitter-timeline" data-height="500" href="https://twitter.com/electronVoltFTC?ref_src=twsrc%5Etfw">Tweets by electronVoltFTC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</div>


