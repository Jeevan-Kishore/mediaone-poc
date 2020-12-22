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
    import Image from "../../components/Image/Image.svelte";
    import ImageLoader from "../../components/Image/ImageLoader.svelte";

    export let story;
    export let cards;
    export let config;

</script>




<svelte:head>
    <title>{story.headline}</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-915M9ZV6LZ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-915M9ZV6LZ');
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

</div>
