<template>
  <v-app>
    <v-main>
      <HeaderMenu />
      <div style="position: absolute; width: 100%; top: 0">
        <img style="position: absolute; left: 0" src="@/assets/images/1x1.svg">
        <img style="position: absolute; left: 0" src="@/assets/images/1x2.svg">
        <img style="position: absolute; right: 0" src="@/assets/images/1x3.svg">
        <img style="position: absolute; right: 0" src="@/assets/images/1x4.svg">
      </div>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>


<style>
.menuHover * {
  color: #E87A0A;
}
::-webkit-scrollbar {  
  width: 12px; /* Width of the vertical scrollbar */
  height: 12px; /* Height of the horizontal scrollbar */
}
::-webkit-scrollbar-track {
  background: #151617; 
  border-radius: 10px;
}
/* The scrollbar thumb (draggable part) */
::-webkit-scrollbar-thumb {
  background: #E87A0A; 
  border-radius: 15px;
}
/* The scrollbar thumb on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>