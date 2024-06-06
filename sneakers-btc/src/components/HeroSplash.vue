<template>
    <div id="home">
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="hero-sheet">
        <div class="hero-content">
          <div class="align-center" style="display: flex">
            <v-col class="squiggly-bg d-none d-md-flex v-col-md-6">
            </v-col>
            <v-col class="v-col-md-6">
              <div>
                <div class="text-center text-md-left">
                  <div style="position: relative">
                    <span class="title" style="margin-bottom: 0">Bitcoin</span>
                    <img class="squiggle-sm" src="@/assets/images/squiggle_sm2.svg"/>
                  </div>
                  <p class="title">Sneakers x OTO</p>
                </div>
                <!-- <div style="padding: 30px 0" class="desc">
                  <span>Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.</span>
                </div> -->
                <div class="squiggly-bg d-flex">
                  <v-img class="d-md-none" src="@/assets/images/sneakerSquiggle2.png"></v-img>
                </div>
                <div class="d-md-flex" style="margin-top:30px;">
                  <div class="text">
                    <span>Designed for those who crave both fashion and function, our sneakers are engineered with state-of-the-art materials to provide unparalleled support and durability. Whether you're hitting the streets or chasing your fitness goals, these kicks are your ultimate companion.</span>
                  </div>
                  <div class="d-none d-md-block vr align-self-stretch"></div>
                  <hr class="d-md-none my-5">
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
#home {
  max-width: 1646px;
  max-height: 870px;
  position: relative;
  margin-top: 20px;
}
.hero-sheet {
  border-radius: 30px; 
  border: 1px solid #707070; 
  display: flex;
}
.hero-content {
  display: flex; 
  margin: 20px;
}
@media (min-width: 690px) {
  .hero-content {
    display: flex; 
    margin: 50px;
  }
}
@media (min-width: 1280px) {
  /* .hero-sheet {
    height: 870px;
  } */
  #home {
    max-width: 1646px;
    margin-top: 100px 
  }
  .hero-content {
    margin: 100px 50px;
  }
}
</style>