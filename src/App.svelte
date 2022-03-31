<script lang="ts">
	export let albumList: string[];
	let likedAlbumList: string[] = [];

	const likeAlbum = (album: string) => {
		addAlbum(album);
		removeAlbum(album);
	};

	const dislikeAlbum = (album: string) => {
		removeAlbum(album);
	};

	const removeAlbum = (album: string) => {
		albumList = albumList.filter((item) => item != album);
	};

	const addAlbum = (album: string) => {
		likedAlbumList = [...likedAlbumList, album];
	};
</script>

<main>
	{#each albumList as album}
		<img src="static/{album}" alt="YEAH" on:click={() => likeAlbum(album)}/>
		<button on:click={() => dislikeAlbum(album)}>Dislike</button>
	{/each}

	<ul class="likedAlbumList">
		{#each likedAlbumList as album}
			<li>
				<!-- <img src="static/{album}" alt=""/> -->
				{album.split(".")[0]}
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.likedAlbumList img {
		width: 10%;
		height: 10%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
