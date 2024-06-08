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
