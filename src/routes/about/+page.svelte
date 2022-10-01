<script lang="ts">

    import ProfileCard from "$lib/profileCard.svelte"
    import { mode } from '$lib/states'

    export let data

    let blog = data.data.rawJSON

    let pranavImg = "../../pranav.png"
    $: {
        if ($mode === "") {
            pranavImg = "../../pranav.png"
        } else [
            pranavImg = "../../pranavDarkMode.png"
        ]
    }

    export interface profile {
        img: string,
        name: string,
    }

    let profiles: profile[] = [
        {
        img: "../../pranav.png",
        name: "Pranav"
    },
    {
        img: "../../profiles/bric.jpeg",
        name: "Bric"
    },
    ]

</script>

<div class="flex flex-col overflow-auto pt-4 px-2 sm:px-6 m-4">

    <div class="pt-4">
        <ProfileCard data={profiles}/>
    </div>


    <div id="blogCard" class="bg-gray-200 dark:bg-gray-600 rounded-xl p-6 ">
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

