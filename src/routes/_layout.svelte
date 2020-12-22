<script>
	import Nav from '../components/Nav.svelte';
	import IntersectionObserver from "../components/Image/IntersectionObserver.svelte";
</script>

<!-- /5463099287/svelte-300x250 -->
<IntersectionObserver once={true} let:intersecting={intersecting}>
	<div id='div-gpt-ad-1608554873198-0' style='width: 300px; height: 250px;'>
		<script>
			googletag.cmd.push(function() { googletag.display('div-gpt-ad-1608554873198-0'); });
		</script>
	</div>
</IntersectionObserver>

<Nav />

<main>
	<slot>
	</slot>
</main>
