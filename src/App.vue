<script setup>
import Page from './stories/Page.vue'
</script>

<template>
  <header>
    <img
      alt="Vendre logo"
      class="logo"
      src="https://vendre.se/thumb/1967/0x68/vendre-optimizers_logo-black.webp"
    />
    <h1>Welcome to meet our team!</h1>
  </header>

  <main>
    <Page />
  </main>
</template>

<style scoped>
header {
  line-height: 1.1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media screen and (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

@media screen and (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    flex-direction: column;
    justify-content: flex-end;
    height: 20rem;
  }

  header h1 {
    margin-top: 1rem;
    text-align: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

@media screen and (max-width: 480px) {
  header {
    margin: -9rem 0 2rem;
  }

  .logo {
    margin: 0;
  }
}
</style>
