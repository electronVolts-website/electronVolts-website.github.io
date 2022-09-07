<svelte:head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
</svelte:head>

<script>
    import MenuBar from '$lib/menuBar.svelte'
    import {mode} from '$lib/states'
    import RightSideBar from "$lib/RightSideBar.svelte";

</script>

<div class="{$mode}">
    <div class="bg-white dark:bg-gray-700">
        <div class="flex flex-col sm:flex-row sm:min-h-screen">
            <MenuBar/>
            <slot/>
            <RightSideBar/>
        </div>
    </div>
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

