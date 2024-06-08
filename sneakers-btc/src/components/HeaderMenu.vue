<template>
    <v-app-bar :elevation="0" color="rgba(0,0,0,0)">
    <template v-slot:prepend>
      <v-app-bar-nav-icon class="hidden-md hidden-lg" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
    <v-toolbar-items class="hidden-sm hidden-xs">
      <template v-for="(item) in menuItems" :key="item.id">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn flat v-bind:href="item.path" variant="plain" :class="isHovering ? 'menuHover' : ''" v-bind="props"  @click="if(item.id < 5 ){router.push(item.path);}">{{ item.title }}</v-btn>
        </v-hover>
      </template>
    </v-toolbar-items>
    <template v-slot:append>
      <v-btn icon="svg:M20.3,4.2c-1.5-0.8-3.2-1.2-4.9-1.5c0,0,0,0-0.1,0c-0.2,0.4-0.5,0.8-0.6,1.2   c-1.9-0.3-3.6-0.3-5.5,0C9.1,3.5,8.8,3.1,8.6,2.7c0,0,0,0-0.1,0C6.8,3,5.2,3.5,3.7,4.2l0,0C0.9,8.2-0.4,13,0.1,17.9l0,0   c1.8,1.3,3.9,2.4,5.9,3c0,0,0,0,0.1,0c0.5-0.6,0.8-1.3,1.2-2v-0.1l0,0c-0.6-0.2-1.2-0.5-1.9-0.9c0,0,0,0,0-0.1l0,0   c0.2-0.1,0.2-0.2,0.4-0.3l0,0c3.8,1.8,8.3,1.8,12,0c0,0,0,0,0.1,0c0.2,0.1,0.2,0.2,0.4,0.3c0,0,0,0,0,0.1l0,0   c-0.6,0.4-1.2,0.6-1.9,0.9c0,0,0,0,0,0.1l0,0c0.4,0.7,0.8,1.4,1.2,2c0,0,0,0,0.1,0c2.2-0.7,4.2-1.7,6-3l0,0   C24.4,13.1,23.1,8.3,20.3,4.2L20.3,4.2 M8,15.1C6.8,15,5.8,14,5.8,12.7c0-1.2,0.9-2.3,2.2-2.4c1.2,0,2.2,1.2,2.2,2.4l0,0   C10.1,14,9.2,15,8,15.1 M15.9,15.1c-1.2-0.1-2.2-1.2-2.2-2.4c0-1.2,0.9-2.3,2.2-2.4c1.2,0,2.2,1.2,2.2,2.4l0,0   C18.1,14,17.2,15,15.9,15.1L15.9,15.1" href="https://discord.com/invite/jqej2Tv7nT" target="_blank"></v-btn>
      <v-btn icon="svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z" href="https://x.com/BitcoinSneakers" target="_blank"></v-btn>
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
    </template>
  </v-app-bar>

     <!-- Navigation Drawer for Burger Menu -->
     <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="(item) in menuItems" :key="item.id" @click="drawer = false">
          <v-list-item-content>
            <v-list-item-title>
              <v-btn flat v-bind:href="item.path" @click="if(item.id < 5 ){router.push(item.path);}">{{ item.title }}</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute()
let redirectPath = route.name != '/' ? '/' : '';
const url = window.location.origin

const drawer = ref(false);
const menuItems = [
  { title: 'Home', path: `${url}${redirectPath}#home`, id: 1},
  // { title: 'About', path: '#about'},
  { title: 'Sneakers', path: `${url}${redirectPath}#sneakers`, id: 2},
  { title: 'Collections', path: `${url}${redirectPath}#collections`, id: 3},
  { title: 'Team', path: `${url}${redirectPath}#team`, id: 4},
  { title: 'Claim', path: `${url}/claim`, id: 5},
];
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>