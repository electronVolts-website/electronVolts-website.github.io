<svelte:head>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
</svelte:head>

<script>
    import ToggleSwitch from '$lib/toggleSwitch.svelte';
    import MenuBar from '$lib/menuBar.svelte'
    import {mode, state} from '$lib/states.js'
    import AustralianToggleSwitch from '$lib/australianToggleSwitch.svelte'
    let embedURL = "https://twitter.com/electronVoltFTC"


</script>
<div class="{$mode}">
    <div class="bg-white dark:bg-gray-600">
        <div class="flex flex-row min-h-screen">
            <MenuBar/>
            <slot></slot>
            <div class="flex flex-col space-y-2 mx-6 ">
                <div class="flex flex-col space-y-2 pt-6 ">
                    <div class="flex flex-row space-x-2">
                        <ToggleSwitch></ToggleSwitch>
                        <p class="dark:text-gray-200">dark mode</p>
                    </div>
                    <div class="flex flex-row space-x-2">
                        <AustralianToggleSwitch></AustralianToggleSwitch>
                        <p class="dark:text-gray-200">australian mode</p>
                    </div>
                </div>
                <div id="twt"class="hidden sm:block sticky top-0 w-1\/3 self-start place-self-end {$state}">
                    <div class="rounded-2xl overflow-hidden shadow-lg max-w-xl">
                        <a class="twitter-timeline" data-height="500" data-theme="{$mode}" href="{embedURL}">Tweets by electronVoltFTC</a> 
                        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
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


  