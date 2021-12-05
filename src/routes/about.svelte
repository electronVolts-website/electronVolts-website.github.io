<script>

import ProfileCard from "$lib/profileCard.svelte"
import {mode} from '$lib/states.js'

let pranavImg = "../../pranav.png"
$: {
    if($mode == ""){
        pranavImg = "../../pranav.png"
    }else[
        pranavImg = "../../pranavDarkMode.png"
    ]
    
}


export let blog
</script>

<script context="module">
    export async function load({ fetch }) {
        //console.log("wow this works")
        const res = await fetch('blog/about.json')
        console.log(res.body.toString('utf8'))
        const blog = await res.json()
        return {
            props: { blog }
        }
    }
</script>

<div class="flex flex-col overflow-auto space-y-4">
    <div class="flex flex-row items-start overflow-x-auto space-x-4">
        <ProfileCard bind:img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>
        <ProfileCard img={pranavImg}/>

    </div>
    <div class="w-full">
        <div id="blogCard" class="bg-gray-200 dark:bg-gray-700 rounded-xl p-8 w-full">
            <div class="font-bold text-3xl pb-4 dark:text-gray-100">
                {blog.title}
            </div>
            <div class="font-medium text-lg pb-4 dark:text-gray-100">
                {blog.date}
            </div>
            <div class="font-medium text-base pb-4 text-gray-600 dark:text-gray-200">
                {blog.desc}
            </div>
            <div class="prose lg:prose-xl sm:prose-sm dark:text-gray-100 dark:prose-dark">
                {@html blog.body}
            </div>
        </div>
    </div>
</div>

