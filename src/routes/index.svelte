<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="theme-color" content="#BFDBFE">
<title>7393 website</title>
<meta name="description" content="website go brrrr">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script>
import Card from '../lib/card.svelte';
import MenuBar from '../lib/menuBar.svelte'
import feedsjson from '../../static/feed.json'

let feeds = feedsjson.bruhFeed
//console.log(feeds)
</script>

<body class="bg-gray-200">  
    <div class="flex flex-row space-x-10">
        <MenuBar/>
        <div id="feed" class="flex flex-col space-y-4 w-full">
            {#each feeds as feed}
                <Card title={feed.title} description={feed.description} ytlink={feed.ytlink}/>
            {/each}
        </div>
        <div id="tweet"class="hidden sm:block sticky top-0 pr-8 w-1\/3 self-start">
            <div class="rounded-2xl overflow-hidden shadow-lg max-w-xl">
                <a class="twitter-timeline" data-height="500" href="https://twitter.com/electronVoltFTC?ref_src=twsrc%5Etfw">Tweets by electronVoltFTC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
    </div>
    
</body>