<script setup>
</script>

<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #121212;
  color: white;
}
.prose :where(pre):not(:where([class~=not-prose] *)) {
    background-color: rgb(0, 0, 0.5);
    border-radius: 0.375rem;
    color: #E5E7EB;
    font-size: .875em;
    font-weight: 400;
    line-height: 1.7142857;
    margin-bottom: 1.7142857em;
    margin-top: 1.7142857em;
    overflow-x: auto;
    padding: 0.8571429em 1.1428571em;
}
</style>
