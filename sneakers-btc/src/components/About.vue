<template>
  <div id="about" style="max-width: 1400px; text-align: center" class="section">
    <v-row justify="center">
      <v-col>
        <h2 class="title">About</h2>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 125px; margin-bottom: -95px; margin-top: 35px">
      <v-col cols="1"></v-col>
      <v-col cols="3" class="orange-arrow1 d-none d-lg-flex"></v-col>
      <v-col cols="3" class="orange-arrow-squiggle d-none d-sm-flex"></v-col>
      <v-col cols="3" class="orange-arrow2 d-none d-lg-flex"></v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="12" sm="6" md="3">
        <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
          <div style="padding: 30px;" class="about-text">
            <span class="text">Bitcoin Sneakers is a project at the crossroads of fashion, art, and technology.</span>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
          <div style="padding: 30px;" class="about-text">
            <span class="text">On February 9th 2023 they made history by becoming the first fashion collection
              inscribed on Bitcoin.</span>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card" style="">
          <div style="padding: 30px;" class="about-text">
            <span class="text">Following the success of their genesis collection, they embarked on their next
              venture—a PFP collection designed to be the face of the brand—the Pioneers.</span>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded class="about-card"
          style="">
          <div style="padding: 30px;" class="about-text">
            <span class="text">With a limited supply of 888, they quickly sold out, fueling the momentum for their
              next project: IRL sneakers.</span>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-container style="text-align: center;  overflow-y: auto;" class="flex-row">
      <v-row justify="center">
        <v-col cols="12" sm="7">
          <div>
            <span>Join us as we bridge the gap between the digital and physical realms through the fusion of fashion,
              art, and technology.</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
</script>

<style>
.about-card {
  border-radius: 30px;
  border: 1px solid #707070;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.orange-arrow1 {
  background-image: url('@/assets/images/orange_arrow1.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  transform: scale(0.7);
}

.orange-arrow2 {
  background-image: url('@/assets/images/orange_arrow2.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  transform: scale(0.7) translateX(20px);
}

.orange-arrow-squiggle {
  background-image: url('@/assets/images/orange_arrow_sqiggle.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
  transform: scale(1.2) translate(-4px, 10px);
}
</style>