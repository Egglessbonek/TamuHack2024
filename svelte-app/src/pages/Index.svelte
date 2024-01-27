<script>
    import GreenButton from '../components/button.svelte';
</script>
  
<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: black;
        color: white;
    }

    h1 {
        text-align: center;
    }
</style>

<main>
    <h1>Welcome to the Index page!</h1>
    <GreenButton label="Click me now"></GreenButton>
</main>
  