<script>

import ProfileCard from "../lib/profileCard.svelte"
//import onMount from 'svelte'

let pranavImg = "../../pranav.png"



//let markdown = marked(text)

</script>



<div class="flex flex-col overflow-auto">
    <div class="flex flex-row items-start overflow-x-auto space-x-4">
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
        <ProfileCard img={pranavImg}/>
        
    </div>
    <div class="bg-gray-100 rounded-xl p-8 mt-4">
        $blog
    </div>
</div>

<script context="module">
    // export async function load({page}){
        
    // }
</script>