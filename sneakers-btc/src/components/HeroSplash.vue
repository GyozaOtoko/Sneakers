<template>
    <div id="home">
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="hero-sheet">
        <div class="hero-content">
          <div style="display: flex; align-items: center;">
            <v-col class="squiggly-bg d-none d-md-flex v-col-md-6">
            </v-col>
            <v-col class="v-col-md-6">
              <div>
                <div>
                  <!-- <div style="position: relative">
                    <span class="title" style="margin-bottom: 0">Bitcoin</span>
                    <img class="squiggle-sm" src="@/assets/images/squiggle_sm2.svg"/>
                  </div> -->
                  <p class="title">Bitcoin Sneakers</p>
                  <p class="subtitle">Luxury footwear for crypto enthusiasts</p>
                </div>
                <!-- <div style="padding: 30px 0" class="desc">
                  <span>Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.</span>
                </div> -->
                <div class="squiggly-bg d-flex">
                  <v-img class="d-md-none" src="@/assets/images/sneakers-hero.png"></v-img>
                </div>
                <div class="d-md-flex" style="margin-top:30px;">
                  <div class="text">
                    <span>Step into the future with footwear that celebrates both your individuality and the revolutionary spirit of Bitcoin culture. Our luxury sneakers combine cutting-edge design with the power of blockchain technology, offering not just a unique statement but also exclusive digital assets. Discover the next evolution in footwear with Bitcoin Sneakers.</span>
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
  background-image: linear-gradient(#262626, #33333E);
}
.hero-content {
  display: flex; 
  margin: 20px;
}
.subtitle {
  font-family: 'ITCAvantGardeGothicLTBold', sans-serif;
  font-size: 16px;
  margin-top: 5px;
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
    height: 470px;
  }
  .subtitle {
    font-family: 'ITCAvantGardeGothicLTBold', sans-serif;;
    font-size: 20px;
  }
}
</style>