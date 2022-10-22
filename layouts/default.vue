<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-[#222] sm:rounded">
    <main class="prose prose-[#222] dark:prose-invert max-w-none">
      <slot />
    </main>
  </div>
</template>

<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
.prose h2 a,
.prose h3 a:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
</style>
