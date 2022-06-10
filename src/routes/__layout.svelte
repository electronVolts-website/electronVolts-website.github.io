<svelte:head>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/github-dark.min.css">
</svelte:head>

<script>
    import ToggleSwitch from '$lib/toggleSwitch.svelte';
    import MenuBar from '$lib/menuBar.svelte'
    import {mode, state} from '$lib/states.js'
<<<<<<< HEAD
    import AustralianToggleSwitch from '$lib/australianToggleSwitch.svelte'
    let embedURL = "https://twitter.com/electronVoltFTC"
    
=======
    import toggleSwitch from '$lib/toggleSwitch.svelte'
    import australianToggleSwitch from "$lib/australianToggleSwitch.svelte";
    //import AustralianToggleSwitch from '$lib/australianToggleSwitch.svelte'
    //let embedURL = "https://twitter.com/electronVoltFTC"

//My name is yoshikage kira. I'm 33 years old. My house is in the northeast section of morioh, 
//where ඞll the villas ඞre, ඞnd i ඞm not married. I work ඞs ඞn employee for the kame yu department stores, 
//ඞnd i get home every day by 8 pm ඞt the latest. I don't smoke, but i occasionally drink. I'm in bed by 11 pm, 
//ඞnd make sure i get eight hours of sleep, no matter what. 
//ඞfter having ඞ glass of warm milk ඞnd doing ඞbout twenty minutes of stretches before going to bed, 
//i usually have no problems sleeping until morning. Just like ඞ baby, i wake up without ඞny fatigue or stress in the morning. 
//I was told there were no issues ඞt my last check-up. I'm trying to explain that i'm ඞ person who wishes to live ඞ very quiet life. 
//I take care not to trouble myself with ඞny enemies, like winning ඞnd losing, that would cause me to lose sleep ඞt night. 
//That is how i deal with society, ඞnd i know that is what brings me happiness. ඞlthough, if i were to fight i wouldn't lose to ඞnyone.

>>>>>>> main
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


  