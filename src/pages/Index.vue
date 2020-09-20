<template>
  <Layout>
    <img src="https://via.placeholder.com/2000x1300" alt="placeholder" />
    <div class="container mx-auto flex flex-wrap justify-center">
      <div class="relative link">
        <h1 class="text-4xl font-extrabold">
          Je suis Andrée-Anne Blais-Auclair
        </h1>
        <g-link
          to="/a-propos"
          class="bg-black p-4 text-white rounded-md z-1 ml-56"
          >En découvrir plus</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
}
</script>

<style lang="stylus" scoped>
.link
  margin-top -50%
  margin-bottom 50%
</style>
