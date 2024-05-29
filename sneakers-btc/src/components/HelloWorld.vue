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
          <v-btn flat :to="test" variant="plain" :class="isHovering ? 'menuHover' : ''" v-bind="props">{{ item.title }}</v-btn>
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
    <div style="max-width: 1646px; max-height: 870px; position: relative">
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
    <v-container class="justify-center justify-center d-flex">
      <div style="max-width: 1646px;max-height: 870px;display: flex;flex-direction: column;align-items: center;gap: 5px;cursor: pointer">
        <div style="font-size: 20px">Scroll down</div>
        <div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);opacity: 0.5;width: 17px;height: 17px;transform: rotate(45deg);"></div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);width: 17px;height: 17px;transform: rotate(45deg); margin-top:-5px"></div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
  const sidebar = false;
  const menuItems = [
    { title: 'Home', path: '/home', icon: 'home' },
    { title: 'About', path: '/signup', icon: 'face' },
    { title: 'Team', path: '/signin', icon: 'lock_open' },
    { title: 'Collections', path: '/signin', icon: 'lock_open' },
    { title: 'Shop', path: '/signin', icon: 'lock_open' }
  ]

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
</style>