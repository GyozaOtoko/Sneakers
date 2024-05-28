<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="1646" max-height="870">
      <v-row>
        <v-col cols="12">
          <v-sheet :elevation="1" height="70vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070">
            <v-container fluid class="fill-height" style="padding: 0">
              <v-row class="fill-height align-center" style="padding: 150px">
                <v-col cols="6" class="squiggly-bg">
                  <img src="@/assets/images/sneaker.png" />
                </v-col>
                <v-col cols="6">
                  <div>
                    <p class="title">Bitcoin<br/>Sneakers x OTO</p>
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
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  //
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
  background-image: url('@/assets/images/squiggle.svg');
  background-position: top;
  background-size: cover;
}
</style>
