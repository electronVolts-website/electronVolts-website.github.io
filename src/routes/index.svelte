<svelte:head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#BFDBFE">
    <title>7393 website</title>
    <meta name="description" content="website go brrrr">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>

<script>
import Card from '../lib/card.svelte';
import feedsjson from '../../static/feed.json'

let feeds = feedsjson.bruhFeed

//console.log(feeds)
</script>

<!--TODO move the buttons to the menubar, hide the tweet stuff when its crammed (md)-->

<div id="feed" class="flex flex-col px-4 sm:px-0 pt-4 sm:mx-6 space-y-2 md:space-y-4 w-full">
    {#each feeds as feed}
        <Card title={feed.title} description={feed.description} ytlink={feed.ytlink}/>
    {/each}
</div>