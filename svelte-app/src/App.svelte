<script>
	import { Router } from 'svelte-routing';
	import Index from './pages/Index.svelte';
	// Import other pages as needed
</script>

<style>
	/* Global styles can be defined here */
	body {
	  font-family: 'Arial', sans-serif;
	  margin: 0;
	  padding: 0;
	}
  
	main {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	}
</style>
  
<main>
	<Router>
	  <Index path="/" />
	</Router>
</main>
  