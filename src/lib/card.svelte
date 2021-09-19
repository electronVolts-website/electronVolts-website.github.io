<script>
    export let title, description, ytlink
</script>

<div class="rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden bg-gray-100 lg\:w-96 justify-end">
    <div class=" flex-grow">
        <iframe class="w-full h-full" src={ytlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="text-3xl pl-4 pt-4"> 
        {title}
    </div>
    <div class="text-base text-gray-500 pl-4 pb-4">
        {description}
    </div>
</div>