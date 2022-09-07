<script>
    import {mode} from '$lib/states'
    mode.set("") //dark will apply the dark class, none is no class
    let changeMode = () => ($mode === "")? mode.set("dark") : mode.set('')
</script>

<div class="relative">    
    <div class="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full" on:click="{changeMode}"></div>
    
    <div class=" dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" class:translate-x-full="{$mode === 'dark'}" on:click="{changeMode}"></div>
</div>