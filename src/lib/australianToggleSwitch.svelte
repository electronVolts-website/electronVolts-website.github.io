<script>
    //console.log(writable)
    import {state} from '$lib/states.js'
    state.set("") //dark will apply the dark class, none is no class
    $: console.log($state + "bruh")
    export let changeMode = () => ($state == "")? state.set("transform rotate-180") : state.set('')
</script>

<div class="relative">    
    <div class="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full" on:click="{changeMode}"></div>
    
    <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" class:translate-x-full="{$state == "transform rotate-180"}" on:click="{changeMode}"></div>
</div>