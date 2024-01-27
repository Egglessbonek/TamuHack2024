<script>
  // No JavaScript logic is required for this simple example
</script>

<style>
  /* Set the background color to black */
  body {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  /* Style the green button */
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>

<main>
  <!-- Create a green button -->
  <button on:click={() => alert('Button clicked!')}>Click me</button>
</main>