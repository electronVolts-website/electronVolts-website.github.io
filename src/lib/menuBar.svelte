<script >

import { page } from "$app/stores";
import {mode, state} from "$lib/states.js";

let path

let pranavImg = "../../pranav.png"
$: {
    path = $page.url.pathname
    console.log($page.url.pathname)
    if($mode === ""){
        pranavImg = "../../pranav.png"
    }else{
        pranavImg = "../../pranavDarkMode.png"
    }
    
}
//a root path stats with /, so we its gonna have problems matching, therefore substring it by 1
//menuPath is the root path for each page, while paths could be child paths (omg branav's fav??)
let isSameOrContainPath = (menuPath, path) => {
    menuPath = menuPath.substring(1)
    path = path.substring(1)
    if (menuPath === "" && path !== "") {
        return false
    }

    console.log(menuPath + " sussy among us " + path)
    return path.startsWith(menuPath)
    //root path would work for the first one, but not for the second one
}

let menuElement = [
    {name: 'Home', path: '/', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-10 sm:w-10 " viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>'},
    {name: 'Blog', path: '/blog', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-10 sm:w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'},
    {name: 'About', path: '/about', icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-10 sm:w-10 flex-grow-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'},
]

</script>
<div class="bg-gray-100 h-auto sm:h-screen p-2 sm:p-0">
    <div id="menu" class="flex flex-row sm:flex-col sticky top-0 self-start items-start w-1\/3 space-x-2 sm:space-y-3 sm:mx-6 sm:pt-4 {$state}">
        <img src={pranavImg} class="object-cover rounded-md w-10 sm:w-auto" alt="team">
        <div class=" font-bold dark:text-gray-300 w-10 sm:w-auto ">
            Team 7393
        </div>
        <div class="flex sm:flex-col flex-row my-auto">
            {#each menuElement as menu}
                <a href={menu.path} class="transition flex flex-row items-center px-2 sm:px-4 space-x-3 {isSameOrContainPath(menu.path, path) || path === menu.path ? 'bg-lmao-yellow dark:text-gray-200 shadow-2xl rounded-md' : 'text-gray-400 rounded-md'}">
                        {@html menu.icon}
                    <div class="font-bold w-full flex-grow p-1 sm:p-0 text-xl sm:text-2xl {isSameOrContainPath(menu.path, path) || path === menu.path ? '' : 'hidden sm:block'}">
                        {menu.name}
                    </div>
                    <!-- <div class="bg-yellow-300 dark:bg-yellow-200 rounded-full w-3 h-3 top-0 right-0 -mr-1 -mt-1 absolute {(menu.path.startsWith("/blog") && path.startsWith("/blog")) || path == menu.path ? '' : 'hidden'} "> -->

                    <!-- </div> -->
                </a>
            {/each}
        </div>
    </div>
</div>

