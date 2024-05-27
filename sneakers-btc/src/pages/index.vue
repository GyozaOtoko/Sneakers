<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-nav">
            <v-toolbar flat>
              <v-toolbar-title class="title-color">Home</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn text class="title-color" @click="toggleShowSizes">Sizes</v-btn>
              <v-btn text class="title-color" @click="toggleShowHello">Hello</v-btn>
              <v-btn text class="title-color">Collections</v-btn>
              <v-btn text class="title-color">Shop</v-btn>
              <v-spacer></v-spacer>
              <v-icon class="title-color">mdi-discord</v-icon>
              <v-icon class="title-color">mdi-close</v-icon>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ShoeSizeTable v-if="showSizes" style="padding-left: 10%; padding-right: 10%"/>
          <HelloWorld v-if="showHello" style="padding-left: 10%; padding-right: 10%"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script  lang="ts">
import ShoeSizeTable from '../components/ShoeSizeTable.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: "NavigationControls",
  components: {
    ShoeSizeTable,
    HelloWorld
  },
  data() {
    return {
      showSizes: true,
      showHello: false,
    };
  },
  methods: {
    toggleShowSizes() {
      this.showSizes = true;
      this.showHello = false;
    },
    toggleShowHello() {
      this.showSizes = false;
      this.showHello = true;
    }
  }
};
</script>

<style scoped>
.full-height {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rounded-nav {
  border-radius: 15px;
  padding: 20px;
  background-color: #000;
}
.title-color {
  color: #ff5722;
  font-weight: bold;
}
</style>
