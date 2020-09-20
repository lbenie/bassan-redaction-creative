<template>
  <nav class="bg-black px-2 py-4 mt-0 fixed w-full z-10 top-0">
    <div class="container mx-auto flex flex-wrap items-center text-white">
      <div
        class="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold"
      >
        <g-link class="uppercase text-xl home ml-4" to="/"
          >bassan rédaction créative</g-link
        >
      </div>
      <div
        class="flex w-full content-center justify-between md:w-1/2 md:justify-end"
      >
        <ul
          class="list-reset flex justify-between flex-1 md:flex-none items-center font-extrabold uppercase"
        >
          <li class="mr-3" v-for="{ name, link } in links" :key="link">
            <g-link class="inline-block link py-2 px-4" :to="link">{{
              name
            }}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'à propos',
          link: 'a-propos',
        },
        {
          name: 'services',
          link: 'services',
        },
        {
          name: 'contact',
          link: 'contact',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
$navbarPrimary = #91640F
$navbarBg = #fcf6de

.home
  color white !important
  background black !important

.link
  position relative
  z-index 1
  transition color .4s

  &:not(.active)
    &::after
      content ""
      position absolute
      bottom 0
      left 0
      width 100%
      height 100%
      transform scaleY(0)
      transform-origin  center
      background $navbarBg
      z-index -1
      transition transform 0.4s

    &:hover
      color $navbarPrimary
      transition color 1s
      &::after
        transform: scaleY(1)

.active--exact
  &.active
    color $navbarPrimary
    background $navbarBg
</style>
