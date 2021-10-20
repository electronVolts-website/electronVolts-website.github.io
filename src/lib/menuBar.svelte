<script>

import { page } from "$app/stores";

let path
let teamImg = "../../pranav.png"

//let path;
$: {
    path = $page.path
    console.log($page.path)
}


let menuElement = [
    {name: 'Home', path: '/', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 flex-grow-0" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>'},
    {name: 'Blog', path: '/blog', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 flex-grow-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'},
    {name: 'About', path: '/about', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 flex-grow-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'},
]
</script>

<div id="menu" class="flex-col sticky top-0 self-start items-start pl-8 w-1\/3 space-y-3">
    <div class="">
        <img src={teamImg} class="object-cover rounded-md " alt="team">
    </div>
    <div class="relative font-bold">
        Team 7393
    </div>

    {#each menuElement as menu}
    <a href={menu.path} class="transition hover: flex flex-row rounded-xl relative items-center bg-gray-50 px-4 space-x-3 {(menu.path.startsWith("/blog") && path.startsWith("/blog")) || path == menu.path ? 'text-gray-900 shadow-2xl' : 'text-gray-400 shadow-sm'} ">
            {@html menu.icon}

        <div class="font-bold w-full flex-grow text-2xl">
            {menu.name}
        </div>
        <div class="bg-yellow-300 rounded-full w-3 h-3 top-0 right-0 -mr-1 -mt-1 absolute {(menu.path.startsWith("/blog") && path.startsWith("/blog")) || path == menu.path ? '' : 'hidden'} ">

        </div>
    </a>
    {/each}
    
</div>