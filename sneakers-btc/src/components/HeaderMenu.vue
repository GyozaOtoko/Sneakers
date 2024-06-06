<template>
    <v-app-bar :elevation="0" color="rgba(0,0,0,0)">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="hidden-md hidden-lg" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
    <v-toolbar-items class="hidden-sm hidden-xs">
      <template v-for="(item) in menuItems" :key="i">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn flat v-bind:href="item.path" variant="plain" :class="isHovering ? 'menuHover' : ''" v-bind="props">{{ item.title }}</v-btn>
        </v-hover>
      </template>
    </v-toolbar-items>
    <template v-slot:append>
      <v-btn icon="svg:M26.3,2C24.3,1,22.2.4,20,0c0,0,0,0-.1,0-.3.5-.6,1.1-.8,1.6-2.4-.4-4.7-.4-7.1,0-.2-.6-.5-1.1-.8-1.6,0,0,0,0-.1,0-2.2.4-4.3,1-6.3,2,0,0,0,0,0,0C1.2,7.1-.5,13.4.2,19.7c0,0,0,0,0,0,2.3,1.7,5,3.1,7.7,3.9,0,0,0,0,.1,0,.6-.8,1.1-1.7,1.6-2.6,0,0,0-.1,0-.1,0,0,0,0,0,0-.8-.3-1.6-.7-2.4-1.2,0,0,0,0,0-.1,0,0,0,0,0,0,.2-.1.3-.2.5-.4,0,0,0,0,0,0,4.9,2.3,10.7,2.3,15.6,0,0,0,0,0,.1,0,.2.1.3.3.5.4,0,0,0,0,0,.1,0,0,0,0,0,0-.8.5-1.6.8-2.4,1.2,0,0,0,0,0,.1,0,0,0,0,0,0,.5.9,1,1.8,1.6,2.6,0,0,0,0,.1,0,2.8-.9,5.4-2.2,7.8-3.9,0,0,0,0,0,0,.7-6.2-1-12.5-4.6-17.7,0,0,0,0,0,0M10.4,16.1c-1.6-.1-2.9-1.5-2.8-3.1,0-1.6,1.2-3,2.8-3.1,1.6,0,2.9,1.5,2.8,3.1,0,0,0,0,0,0,0,1.6-1.2,3-2.8,3.1M20.7,16.1c-1.6-.1-2.9-1.5-2.8-3.1,0-1.6,1.2-3,2.8-3.1,1.6,0,2.9,1.5,2.8,3.1,0,0,0,0,0,0,0,1.6-1.1,3-2.8,3.1,0,0,0,0,0,0" href="https://discord.com/invite/jqej2Tv7nT" target="_blank"></v-btn>
      <v-btn icon="svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z" href="https://x.com/BitcoinSneakers" target="_blank"></v-btn>
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
    </template>
  </v-app-bar>

     <!-- Navigation Drawer for Burger Menu -->
     <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="(item, i) in menuItems" :key="i" @click="drawer = false">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn flat v-bind:href="item.path">{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">

const drawer = ref(false);
  const menuItems = [
    { title: 'Home', path: '#home'},
    // { title: 'About', path: '#about'},
    { title: 'Shop', path: '#shop'},
    { title: 'Collections', path: '#collections'},
    { title: 'Team', path: '#team'},
    { title: 'Claim', path: '#'},
  ];
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>