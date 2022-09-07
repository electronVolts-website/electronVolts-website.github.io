
<script>
    import {mode} from '$lib/states'
    let embedURL = "https://twitter.com/electronVoltFTC"

</script>


<div class="flex flex-col space-y-2 pt-4 sm:block hidden w-auto">
    {#key $mode}
    <div id="twt" class="hidden sm:block sticky top-0 self-start place-self-end ">
        <div class="rounded-2xl shadow-lg max-w-xl">
            <a class="twitter-timeline" data-height="700" data-theme="{$mode}" href="{embedURL}">Tweets by electronVoltFTC</a>
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
    {/key}
</div>