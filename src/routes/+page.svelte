<svelte:head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#BFDBFE">
    <title>7393 website</title>
    <meta name="description" content="website go brrrr">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="twitter:widgets:border-color" content="#55acee">
</svelte:head>

<script>
    import VideoCard from '$lib/VideoCard.svelte';
    export let data
</script>

<!--TODO move the buttons to the menubar, hide the tweet stuff when its crammed (md)-->
<div class="px-4 sm:px-0 pt-4 sm:mx-6 w-full">
    <div id="feed" class="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 space-y-2 lg:space-y-0 ">
        {#each data.data.videos as feed}
            <VideoCard title={feed.title} description={feed.description} ytlink={feed.url} thumbnail={feed.thumbnail}/>
        {/each}
    </div>
</div>
