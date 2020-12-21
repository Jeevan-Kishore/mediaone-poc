<script>

</script>

<style>




/*Mobile first approach*/

/* Mobile styles begin */
.menuLevelOne{
	display: none;
}

.menuWrapper{
	background-color: #00407f;
	color: #FFFFFF;
}

.logoContainerOne {
	width: 150px;
	height: 50spx;
}



/* Desktop designs */
@media only screen  and (min-width : 1224px) {
	.logoContainer {
		max-width: 145px;
		max-height: 32px;
	}
	.menuLevelOne{
		display: block;
	}
}


</style>

<nav>
	<div class="menuWrapper menuLevelOne">
		<img class="logoContainer logoContainerOne" src="https://fea.assettype.com/mediaone/assets/logo-white-0648e54203b8e1506121.svg" alt="header logo" />
	</div>
</nav>
