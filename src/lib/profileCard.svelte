<script>
    export let data

</script>

<div class="rounded-xl bg-gray-200 dark:bg-gray-600 shadow-lg p-3 mb-4">
    <div class="font-bold text-3xl ml-2">
        Meet The Team
    </div>
</div>

<div class="flex items-start overflow-x-auto space-x-2">
    {#each data as profile}
        <div>
            <div class="rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-600 shadow-md mb-4 w-32">
                <img src={profile.img} class="rounded-full object-cover object-center aspect-1 p-4 " alt="pranav go brrr">
                <div class="font-bold dark:text-gray-200 grid place-items-center bg-gray-300 p-1">
                    {profile.name}
                </div>
            </div>
        </div>
    {/each}
</div>