<script>
    import PlaceHolder from "./PlaceHolder.svelte";
    import IntersectionObserver from './IntersectionObserver.svelte'
    import Image from './Image.svelte'

    export let src
    export let alt

</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting}
        <Image {alt} {src} />
    {:else}
        <PlaceHolder />
    {/if}
</IntersectionObserver>
