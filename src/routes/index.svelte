<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="theme-color" content="#BFDBFE">
<title>7393 website</title>
<meta name="description" content="website go brrrr">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script>
import Card from '../lib/card.svelte';

import feedsjson from '../../static/feed.json'
import { each } from 'svelte/internal';

let feeds = feedsjson.bruhFeed
console.log(feeds)
</script>

<body class="bg-gray-200">
    <div class="flex flex-row space-x-10">
        <div id="menu" class="flex-col sticky top-0 items-start pl-4 w-1\/3">
            <div class="relative ">
                Team 7393
            </div>
            <div class="flex flex-row rounded-xl shadow-2xl items-center bg-gray-50 px-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 flex-grow-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div class="text-gray-600 font-bold w-full flex-grow text-2xl">
                    Home
                </div>
            </div>
        </div>

        <div id="feed" class="flex flex-col space-y-4 w-full">
            {#each feeds as feed}
                <Card title={feed.title} description={feed.description} ytlink={feed.ytlink}/>
            {/each}
        </div>
        <div id="tweet"class="hidden sm:block sticky top-0 pr-8 w-1\/3">
            <div class="rounded-2xl overflow-hidden shadow-lg max-w-xl">
                <a class="twitter-timeline" data-height="500" href="https://twitter.com/electronVoltFTC?ref_src=twsrc%5Etfw">Tweets by electronVoltFTC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    </div>
    
</body>