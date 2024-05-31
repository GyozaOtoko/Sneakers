<template>
  <div style="position: absolute; width: 100%; top: 0">
    <img style="position: absolute; left: 0" src="@/assets/images/1x1.svg">
    <img style="position: absolute; left: 0" src="@/assets/images/1x2.svg">
    <img style="position: absolute; right: 0" src="@/assets/images/1x3.svg">
    <img style="position: absolute; right: 0" src="@/assets/images/1x4.svg">
  </div>
  <v-app-bar :elevation="0" color="rgba(0,0,0,0)">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->
    <v-toolbar-items class="hidden-xs-only">
      <template v-for="(item, i) in menuItems" :key="i">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn flat :to="item.path" variant="plain" :class="isHovering ? 'menuHover' : ''" v-bind="props">{{ item.title }}</v-btn>
        </v-hover>
      </template>
    </v-toolbar-items>

    <template v-slot:append>
      <v-btn icon="mdi-discord" href="https://x.com/BitcoinSneakers" target="_blank"></v-btn>
      
      <v-btn icon="svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z" href="https://x.com/BitcoinSneakers" target="_blank"></v-btn>

      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
    </template>
  </v-app-bar>
  <v-container class="fill-height justify-center">
    <div id="home" style="max-width: 1646px; max-height: 870px; position: relative">
      <v-sheet :elevation="1" height="70vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 70vh; display: flex">
        <div style="display: flex; margin: 50px;">
          <div class="align-center" style="display: flex">
            <v-col cols="6" class="squiggly-bg">
            </v-col>
            <v-col cols="6">
              <div>
                <div style="position: relative">
                  <span class="title" style="margin-bottom: 0">Bitcoin</span>
                  <span>
                    <img src="@/assets/images/squiggle_sm2.png"/></span>
                </div>
                <p class="title">Sneakers x OTO</p>
                <div style="padding: 30px 0" class="desc">
                  <span>Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.</span>
                </div>
                <div class="d-flex">
                  <div class="text">
                    <span>Designed for those who crave both fashion and function, our sneakers are engineered with state-of-the-art materials to provide unparalleled support and durability. Whether you're hitting the streets or chasing your fitness goals, these kicks are your ultimate companion.</span>
                  </div>
                  <div class="vr align-self-stretch"></div>
                  <div class="text">
                    <span>Unleash your individuality with our diverse range of colorways and designs. From sleek monochromes to vibrant patterns, the FutureStride Collection ensures you make a statement with every step. These aren't just sneakers; they're a reflection of your unique personality.</span>
                  </div>
                </div>
              </div>
            </v-col>
          </div>
        </div>
      </v-sheet>
    </div>
    <v-container class="justify-center justify-center d-flex" style="margin-top: 50px">
      <div style="max-width: 1646px;max-height: 870px;display: flex;flex-direction: column;align-items: center;gap: 5px;cursor: pointer">
        <div style="font-size: 20px">Scroll down</div>
        <div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);opacity: 0.5;width: 17px;height: 17px;transform: rotate(45deg);"></div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);width: 17px;height: 17px;transform: rotate(45deg); margin-top:-5px"></div>
        </div>
      </div>
    </v-container>
    <v-container class="justify-center d-flex" style="margin-top: 150px">
      <div id="collections" style="max-width: 1646px;max-height: 870px;display: flex;flex-direction: column;">
        <h2 class="title">Collections</h2>
        <div class="stats d-flex" style="gap: 10px; margin-top: 50px">
          <div id="search" class="coll-container">
            <div class="coll_title">Bitcoin<br/>sneakers</div>
            <div class="coll_date">Created <b>March 11, 2023</b></div>
            <div class="coll_filter">
            <!-- <v-btn @click="dialog = true">Filter</v-btn>
              <v-dialog v-model="dialog" width="auto">
                <v-card
                  max-width="400"
                  prepend-icon="mdi-update"
                  text="Your application will relaunch automatically after the update is complete."
                  title="Update in progress"
                ></v-card> -->
                <!-- <template v-for="(item, index) in traitCategories"
                    :key="index"
                    :value="index">
                    <v-select
                      chips
                      :items="item.values"
                      :label="item.traitType"
                      multiple
                    ></v-select>
                </template> -->
                <!-- <template v-slot:actions>
                  <v-btn
                  class="ms-auto"
                  text="Ok"
                  @click="dialog = false"
                  ></v-btn>
                </template>
              </v-dialog> -->
              <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    v-bind="activatorProps"
                    color="surface-variant"
                    text="Filter"
                    variant="flat"
                  ></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                  <v-card title="Traits">
                    <v-card-text>
                      <template v-for="(item, index) in traitCategories"
                          :key="index"
                          :value="index">
                          <v-select
                            chips
                            clearable
                            :items="item.values"
                            :label="item.traitType"
                            multiple
                          ></v-select>
                      </template>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn
                        text="Close"
                        @click="isActive.value = false"
                      ></v-btn>
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
            </div>
            <div class="coll_search">search</div>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import jsonData from '@/assets/json/pioneersMetadata.json'
  
  let dialog = false;
  const sidebar = false;
  const menuItems = [
    { title: 'Home', path: '#home', icon: 'home' },
    { title: 'About', path: '#about', icon: 'face' },
    { title: 'Team', path: '#team', icon: 'lock_open' },
    { title: 'Collections', path: '#collections', icon: 'lock_open' },
    { title: 'Shop', path: '#shop', icon: 'lock_open' }
  ];

  // let traitCategories: [{
  //   [key: string] : {
  //     traitType: string,
  //     values: [string]
  //   }
  // }] | any = [];

  let traitCategories: [{
      traitType: string,
      values: [string]
  }] | any = [];
  
  onMounted(() => {
    //build traitCategories
    jsonData.forEach(item => {
      item.meta.attributes.forEach((att: {trait_type: string, value: string}) => {
        if(!traitCategories.find(item => item.traitType == att.trait_type)) {
          traitCategories.push({
            traitType: att.trait_type, 
            values: [att.value]
          })
        }
        else {
          let tempTraitItem = traitCategories.find(item => item.traitType == att.trait_type);
          if (!tempTraitItem.values.includes(att.value)) {
            tempTraitItem.values.push(att.value);
          }
        }
      })
    })
    console.log(JSON.stringify(traitCategories))
     // <div>
  })
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/65dc1b4fb1cd6bf31e730421533dafc7?family=ITC+Avant+Garde+Gothic+W02+Md);
@import url(https://fonts.cdnfonts.com/css/helvetica-neue-55?styles=15999);

                
/* .squiggly-bg {
} */
.title {
  font: normal normal bold 50px/45px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  color: #FFFFFF;
  font-stretch: 1% 150%
}
.desc {
  text-align: left;
  font: normal normal bold 16px/17px Helvetica Neue;
  letter-spacing: 1px;
  color: #FFFFFF;
  opacity: 0.5;
}
.text {
  font: normal normal normal 16px/17px Helvetica Neue;
  letter-spacing: -0.32px;
  color: #FFFFFF;
  opacity: 0.5;
}
.vr {
  margin: 0 30px; 
  border-right: 2px solid #fff; 
  opacity: 0.5
}
.squiggly-bg {
  background-image: url('@/assets/images/sneakerSquiggle2.png');
  background-position: center;
  background-size: contain;
  height: 100%;
}
.sneaker-shadow {
  top: 760px;
  left: 363px;
  width: 573px;
  height: 29px;
  /* UI Properties */
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.5;
  filter: blur(5px);
}
.squiggle_sm-bg {
  position: absolute; 
  background-image: url('@/assets/images/squiggle_sm2.png');
}
.v-app-bar.v-toolbar {
  background-color: rgba(0,0,0,0);
}
.menuHover * {
  color: #E87A0A;
}
.coll_title { grid-area: title; font: normal normal bold 30px/30px ITC Avant Garde Gothic W02 Md; letter-spacing: 2px;}
.coll_date { grid-area: date; font: normal normal normal 16px/17px Helvetica Neue; letter-spacing: -0.32px;}
.coll_filter { grid-area: filter; }
.coll_search { grid-area: search; }
.coll-container {
  display: grid;
  grid-template-areas:
    'title date'
    'title filter'
    'search search';
  gap: 10px;
}
</style>