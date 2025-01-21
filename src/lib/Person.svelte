<script>
    export let name;
    export let link;
    export let desc;
</script>

<a class="flex flex-col gap-y-2 py-6 px-3 no-underline text-black hover:text-gray-400 transition-colors w-64" href={link}>
    <p class="font-bold">{name}</p>
    <p>{desc}</p>
</a>