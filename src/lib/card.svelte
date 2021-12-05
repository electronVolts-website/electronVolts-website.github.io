<script>
    export let title, description, ytlink
</script>

<div class="rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden lg\:w-96 justify-end">
    <div class="flex-grow">
        <iframe class="w-full h-full" src={ytlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="bg-gray-100 dark:bg-gray-700">
        <div class="text-xl pl-4 pt-4 text-gray-800 dark:text-gray-100"> 
            {title}
        </div>
        <div class="text-sm text-gray-500 dark:text-gray-300 pl-4 pb-4">
            {description}
        </div>
    </div>
    
</div>