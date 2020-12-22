<script>
    import PlaceHolder from "./PlaceHolder.svelte";

    export let src
    export let alt

    import IntersectionObserver from './IntersectionObserver.svelte'
    import Image from './Image.svelte'

</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting}
        <Image {alt} {src} />
    {:else}
        <PlaceHolder />
    {/if}
</IntersectionObserver>
