import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		albumList: ["Discovery.png", "Justice.jpg", "The Slow Rush.png"]
	}
});

export default app;