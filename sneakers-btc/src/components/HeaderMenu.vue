<template>
    <v-app-bar :elevation="0" color="rgba(0,0,0,0)">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
    <v-toolbar-items class="hidden-xs-only">
      <template v-for="(item) in menuItems" :key="i">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn flat v-bind:href="item.path" variant="plain" :class="isHovering ? 'menuHover' : ''" v-bind="props">{{ item.title }}</v-btn>
        </v-hover>
      </template>
    </v-toolbar-items>
    <template v-slot:append>
      <v-btn icon="mdi-discord" href="https://discord.com/invite/jqej2Tv7nT" target="_blank"></v-btn>
      <v-btn icon="svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z" href="https://x.com/BitcoinSneakers" target="_blank"></v-btn>
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
  const menuItems = [
    { title: 'Home', path: '#home', icon: 'home' },
    { title: 'About', path: '#about', icon: 'face' },
    { title: 'Team', path: '#team', icon: 'lock_open' },
    { title: 'Collections', path: '#collections', icon: 'lock_open' },
    { title: 'Shop', path: '#shop', icon: 'lock_open' }
  ];
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>