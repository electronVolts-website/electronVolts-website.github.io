<svelte:head>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">

    {#if !$mode}
        <style>
            body {
                background-color: #f3f4f6;
            }
        </style>
    {:else}
        <style>
            body {
                background-color: #374151;
            }
        </style>
    {/if}
<!--    uhm the best workaround until we have svelte:head class="something"-->
<!--    this gives you true background colors, especially on mobile-->
</svelte:head>

<script>
    import MenuBar from '$lib/menuBar.svelte'
    import { mode } from '$lib/states'
    import RightSideBar from "$lib/RightSideBar.svelte";

</script>


<div class="{$mode} flex flex-col w-auto h-full sm:flex-row sm:min-h-screen ">
    <MenuBar/>
    <slot/>
    <RightSideBar/>
</div>


<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>