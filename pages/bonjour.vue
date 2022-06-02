<script setup>
const { data: res } = await useFetch("/api/hello");
</script>

<template>
  <div>
    <gallery
      :title="res.value"
      text="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom."
    />
  </div>
</template>
