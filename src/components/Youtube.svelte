<script>
    import IntersectionObserver from './Image/IntersectionObserver.svelte'
    export let youtubeUrl = "";
</script>

<IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting}
        <iframe title="youtube-video" id="ytplayer" type="text/html" width="100%" height="360"
                src={youtubeUrl}
                frameborder="0"></iframe>
    {/if}
</IntersectionObserver>



