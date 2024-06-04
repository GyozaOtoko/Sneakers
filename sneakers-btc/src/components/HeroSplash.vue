<template>
    <div id="home" style="max-width: 1646px; max-height: 870px; position: relative">
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="hero-sheet">
        <div style="display: flex; margin: 50px;">
          <div class="align-center" style="display: flex">
            <v-col class="squiggly-bg d-none d-md-flex v-col-md-6">
            </v-col>
            <v-col class="v-col-md-6">
              <div>
                <div style="position: relative">
                  <span class="title" style="margin-bottom: 0">Bitcoin</span>
                  <img class="squiggle-sm" src="@/assets/images/squiggle_sm2.png"/>
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
</template>

<style>
.hero-sheet {
  border-radius: 30px; 
  border: 1px solid #707070; 
  display: flex;
}
@media (min-width: 1280px) {
  .hero-sheet {
    height: 870px;
  }
}
</style>