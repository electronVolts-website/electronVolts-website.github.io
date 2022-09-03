
<script>
    import ToggleSwitch from '$lib/toggleSwitch.svelte';
    import AustralianToggleSwitch from '$lib/australianToggleSwitch.svelte'
    import {mode, state} from '$lib/states'
    let embedURL = "https://twitter.com/electronVoltFTC"

</script>


<div class="flex flex-col space-y-2 mx-6 sm:block hidden ">

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

    <div id="twt" class="hidden sm:block sticky top-0 self-start place-self-end {$state}">
        <div class="rounded-2xl  shadow-lg max-w-xl">
            <a class="twitter-timeline" data-height="500" data-theme="{$mode}" href="{embedURL}">Tweets by electronVoltFTC</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</div>