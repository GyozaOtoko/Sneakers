<template>
  <div id="team" style="max-width: 900px;" class="section">
    <div style="position: absolute;width: 100%;margin: -16px;">
      <img class="team-bg" src="@/assets/images/arch.svg">
    </div>
    <div style="text-align: center; position: relative">
      <v-row justify="center">
        <v-col>
          <h2 class="title">Team</h2>
        </v-col>
      </v-row>
      <v-row class="justify-center" style="margin-top: 50px">
        <v-col cols="6">
          <div class="text text-left">
            <span>Designed for those who crave both fashion and function, our sneakers are engineered with
              state-of-the-art materials to provide unparalleled support and durability. Whether you're hitting
              the streets or chasing your fitness goals, these kicks are your ultimate companion.</span>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="text text-left">
            <span>Unleash your individuality with our diverse range of colorways and designs. From sleek
              monochromes to vibrant patterns, the FutureStride Collection ensures you make a statement with every
              step. These aren't just sneakers; they're a reflection of your unique personality.</span>
          </div>
        </v-col>
      </v-row>
      <v-row class="justify-center" style="margin-top: 50px;text-align: center;">
        <v-col cols="12" sm="4" class="team-card">
          <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded
            style="border-radius: 30px; border: 1px solid #707070; display: flex; align-items: center; justify-content: center;">
            <v-container>
              <v-row>
                <v-col align-self="center">
                  <v-img src="@/assets/images/DayTripper.png" width="100%" />
                </v-col>
              </v-row>
              <v-row justify="center">
                <div style="padding-top: 10px; text-align: center;" class="about-text">
                  <span>DAYTRIPPER</span>
                </div>
              </v-row>
              <v-row justify="center">
                <span>Founder</span>
              </v-row>
              <v-row justify="center">
                <a href="www.x.com/daytripperNFT" class="team-link">
                  x.com/daytripperNFT
                </a>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4" class="team-card">
          <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded
            style="border-radius: 30px; border: 1px solid #707070; display: flex; align-items: center; justify-content: center;">
            <v-container>
              <v-row>
                <v-col align-self="center">
                  <v-img src="@/assets/images/Gyoza.png" width="100%" />
                </v-col>
              </v-row>
              <v-row justify="center">
                <div style="padding-top: 10px; text-align: center;" class="about-text">
                  <span>GYOZA</span>
                </div>
              </v-row>
              <v-row justify="center">
                <span>Dev</span>
              </v-row>
              <v-row justify="center">
                <a href="https://x.com/GyozaOtoko4596" class="team-link">
                  x.com/GyozaOtoko4596
                </a>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="4" class="team-card">
          <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded
            style="border-radius: 30px; border: 1px solid #707070; display: flex; align-items: center; justify-content: center;">
            <v-container>
              <v-row>
                <v-col align-self="center">
                  <v-img src="@/assets/images/Vincen.png" width="100%" />
                </v-col>
              </v-row>
              <v-row justify="center">
                <div style="padding-top: 10px; text-align: center;" class="about-text">
                  <span>VICEN</span>
                </div>
              </v-row>
              <v-row justify="center">
                <span>Artist</span>
              </v-row>
              <v-row justify="center">
                <a href="https://x.com/Vicendraws" class="team-link">
                  x.com/Vicendraws
                </a>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<style>
.about-text {
  text-align: center;
  font: normal normal bold 20px/30px Helvetica Neue;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}

.team-link {
  color: #F7F7F7;
  font-size: 0.8rem;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: color 0.3s
}

.team-link:hover {
  color: #E87A0A
}

.team-card {
  max-width: 280px;
}

.v-btn.team-link {
  text-transform: none;
}

.team-bg {
  position: absolute; left: 0; transform: rotate(90deg) translate(10vw, 50%);
}
@media (min-width: 960px) {
  .team-bg {
    transform: rotate(90deg) translate(10vw, 50vw);
  }
}
</style>