<template>
    <div id="about" style="max-width: 1646px; max-height: 870px; position: relative">
        <v-container class="justify-center" style="text-align: center; height: 60vh; ">
      <v-container :elevation="1" class="justify-center" style="text-align: center;">               
        <v-row justify="center">          
            <div style="margin-bottom: 20px; z-index: 1000">
              <span class="about-title" style="margin-bottom: 0;  ">About</span>
            </div>
          
        </v-row>
        <v-container :elevation="2" class="justify-center d-flex" style="text-align: center; min-height: 125px; margin-bottom: -75px;">
          <v-row justify="center">
              <v-col cols="1"></v-col>
              <v-col cols="3" class="orange-arrow1"></v-col>
              <v-col cols="3" class="orange-arrow-squiggle"></v-col>
              <v-col cols="3" class="orange-arrow2"></v-col>
              <v-col cols="1"></v-col>
          </v-row>
        </v-container>
      <v-row class="mb-4">
        <v-col>
          <div style="max-width: 337px; max-height: 265px; position: relative; margin: auto;">
            <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 40vh; display: flex; align-items: center; justify-content: center;">
              <div style="padding: 30px;" class="about-text">
                <span>Bitcoin Sneakers is a project at the crossroads of fashion, art, and technology.</span>
              </div>
            </v-sheet>
          </div>
        </v-col>
        <v-col>
          <div style="max-width: 337px; max-height: 265px; position: relative; margin: auto;">
            <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 40vh; display: flex; align-items: center; justify-content: center;">
              <div style="padding: 30px;" class="about-text">
                <span>On February 9th 2023 they made history by becoming the first fashion collection inscribed on Bitcoin.</span>
              </div>
            </v-sheet>
          </div>
        </v-col>
        <v-col>
          <div style="max-width: 337px; max-height: 265px; position: relative; margin: auto;">
            <v-sheet :elevation="1"  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 40vh; display: flex; align-items: center; justify-content: center;">
              <div style="padding: 30px;" class="about-text">
                <span>Following the success of their genesis collection, they embarked on their next venture—a PFP collection designed to be the face of the brand—the Pioneers.</span>
              </div>
            </v-sheet>
          </div>
        </v-col>
        <v-col>
          <div style="max-width: 337px; max-height: 265px; position: relative; margin: auto;">
            <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 40vh; display: flex; align-items: center; justify-content: center;">
              <div style="padding: 30px;" class="about-text">
                <span>With a limited supply of 888, they quickly sold out, fueling the momentum for their next project: IRL sneakers.</span>
              </div>
            </v-sheet>
          </div>
        </v-col>
      </v-row>           
    </v-container>    
  </v-container>
  <v-container style="text-align: center;  overflow-y: auto;" class="flex-row">
      <v-row justify="center" >        
        <v-col cols="7">          
          <div>
            <span class="text" style="">Join them as they bridge the gap between the digital and physical realms through the fusion of fashion, art, and technology.</span>
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
.orange-arrow1 {
  background-image: url('@/assets/images/orange_arrow1.svg');
  background-position: center;
  background-size: contain;
  height: 125%;
  z-index: 1000;
}
.orange-arrow2 {
  background-image: url('@/assets/images/orange_arrow2.svg');
  background-position: center;
  background-size: contain;
  height: 125%;
  z-index: 1000;
}
.orange-arrow-squiggle {
  background-image: url('@/assets/images/orange_arrow_sqiggle.svg');
  background-position: center;
  background-size: contain;
  height: 125%;
  z-index: 1000;
}
</style>