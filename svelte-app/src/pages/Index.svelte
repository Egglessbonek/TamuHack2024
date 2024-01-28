<script>
    import Button from '../components/Button.svelte';
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
    <Button label="Click me now"></Button>
</main>

