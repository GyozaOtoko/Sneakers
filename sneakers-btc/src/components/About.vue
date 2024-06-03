<template>
    <div id="about" style="max-width: 1400px; position: relative; margin-top: 200px">
      <v-container class="justify-center" style="text-align: center;">       
        <v-row justify="center">
            <div style="margin-bottom: 20px; z-index: 1000">
              <span class="about-title">About</span>
            </div>
        </v-row>
        <v-container style="height: 125px; margin-bottom: -85px;">
          <v-row justify="center" style="height: 125px">
              <v-col cols="1"></v-col>
              <v-col cols="3" class="orange-arrow1"></v-col>
              <v-col cols="3" class="orange-arrow-squiggle"></v-col>
              <v-col cols="3" class="orange-arrow2"></v-col>
              <v-col cols="1"></v-col>
          </v-row>
        </v-container>
      <v-row class="mb-4">
        <v-col>
          <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
            <div style="padding: 30px;" class="about-text">
              <span class="text">Bitcoin Sneakers is a project at the crossroads of fashion, art, and technology.</span>
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
            <div style="padding: 30px;" class="about-text">
              <span class="text">On February 9th 2023 they made history by becoming the first fashion collection inscribed on Bitcoin.</span>
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
            <div style="padding: 30px;" class="about-text">
              <span class="text">Following the success of their genesis collection, they embarked on their next venture—a PFP collection designed to be the face of the brand—the Pioneers.</span>
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
            <div style="padding: 30px;" class="about-text">
              <span class="text">With a limited supply of 888, they quickly sold out, fueling the momentum for their next project: IRL sneakers.</span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>           
    </v-container>
    <v-container style="text-align: center;  overflow-y: auto;" class="flex-row">
        <v-row justify="center" >        
          <v-col cols="7">          
            <div>
              <span>Join them as they bridge the gap between the digital and physical realms through the fusion of fashion, art, and technology.</span>
            </div>
          </v-col>        
        </v-row>
    </v-container>
  </div>
</template>

<script>
</script>

<style>
.about-title {
  font: normal normal bold 50px/45px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  color: #FFFFFF;
  font-stretch: 1% 150%;
  opacity: 1;
  z-index: 1000;
}
.about-card {
  border-radius: 30px; border: 1px solid #707070; display: flex; align-items: center; justify-content: center;
  height: 100%;
}
.orange-arrow1 {
  background-image: url('@/assets/images/orange_arrow1.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
  transform: scale(0.7);
}
.orange-arrow2 {
  background-image: url('@/assets/images/orange_arrow2.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
  transform: scale(0.7) translateX(20px);
}
.orange-arrow-squiggle {
  background-image: url('@/assets/images/orange_arrow_sqiggle.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
  transform: scale(1.2) translate(-4px, 10px);
}
</style>