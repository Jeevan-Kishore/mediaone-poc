<!-- src/routes/story/[slug].svelte -->
<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload({ path, params, query }) {
        // the `slug` parameter is available because this file
        // is called [slug].svelte
        let { slug } = params;
        slug = slug.join("/");

        // `this.fetch` is a wrapper around `fetch` that allows
        // you to make credentialed requests on both
        // server and client

        const {
            data: {
                story = {}
            },
            config = {}
        } = await (await this.fetch(`https://www.mediaonetv.in/route-data.json?path=${slug}`)).json();
        const {cards = []} = story;
        return { story, cards, config };
    }
</script>

<!--Init props-->
<script>
    import HtmlText from "../../components/HtmlText.svelte"
    import Youtube from "../../components/Youtube.svelte"
    import ImageLoader from "../../components/Image/ImageLoader.svelte";
    import IntersectionObserver from "../../components/Image/IntersectionObserver.svelte";

    export let story;
    export let cards;
    export let config;

</script>




<svelte:head>
    <title>{story.headline}</title>
    <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('/5463099287/svelte-300x250', [300, 250], 'div-gpt-ad-1608554873198-0').addService(googletag.pubads());
            var mapping = googletag.sizeMapping()
                    .addSize([1024, 768], [728, 90])
                    .addSize([640, 480], [300, 250])
                    .addSize([0, 0], [300, 250])
                    .build();
            googletag.defineSlot('/5463099287/svelte-728x90-300x250', [[728, 90], [300, 250]], 'div-gpt-ad-1608554915254-0').defineSizeMapping(mapping).addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
    </script>
</svelte:head>

<h1>{story.headline}</h1>


<div class='content'>
    <ImageLoader src={`https://${config["cdn-image"]}/${story["hero-image-s3-key"]}`} alt="Our image"/>
    <!--Loop story cards-->
    {#each cards as card}

    <!--Loop each story element-->
        {#each card["story-elements"] as storyElement}

            {#if storyElement.type === "text"  && storyElement.subtype === "also-read"}
                <HtmlText htmlText={storyElement.text} />

            {:else if storyElement.type === "text"}
                <HtmlText htmlText={storyElement.text} />

            {:else if storyElement.type === "youtube-video"}
                <Youtube  youtubeUrl={storyElement["embed-url"]} />
            {/if}

        {/each}

    {/each}

    <IntersectionObserver once={true} let:intersecting={intersecting}>
        {#if intersecting}
        <!-- /5463099287/svelte-728x90-300x250 -->
            <div id='div-gpt-ad-1608554915254-0'>
                <script>
                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1608554915254-0'); });
                </script>
            </div>
        {/if}
    </IntersectionObserver>

</div>
