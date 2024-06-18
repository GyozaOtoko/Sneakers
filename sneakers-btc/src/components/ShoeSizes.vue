<template>
  <div id="shoesizes" style="max-width: 1400px; margin-top: 200px" class="section">
    <v-row>
      <v-col cols="12" lg="4">
        <v-card class="rounded-table" style="padding: 20px">
          <v-data-table :headers="headers" :items="shoeSizes" :items-per-page="20" hide-default-footer>
          </v-data-table>
          <div style="padding:20px; text-align: left; font-size: 0.9rem;">Since the sizeas are in <span
              style="color:#E87A0A">US MENS</span>. Please do the appropriate conversions to ensure the proper fit.
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8">
        <div class="content-container">
          <div class="info-text">
            <p style="padding-bottom:5px; opacity:0.5">
              Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining
              high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.
            </p>
            <div style="padding: 30px 0" class="desc">
              <span>Here's how it works:</span>
            </div>
            <v-container class="justify-center d-flex"
              style="text-align: center; min-height: 125px; margin-bottom: -75px;">
              <v-row justify="center">
                <v-col cols="1"></v-col>
                <v-col cols="3" class="arrow1"></v-col>
                <v-col cols="3" class="arrow-squiggle"></v-col>
                <v-col cols="3" class="arrow2"></v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-container>
            <v-row>
              <v-col>
                <v-sheet height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded
                  style="border-radius: 30px; border: 1px solid #707070; height: 15vh; display: flex; align-items: center; justify-content: center;">
                  <v-container>
                    <v-row no-gutters>
                      <v-col md="3" align-self="center">
                        <v-img src="@/assets/images/shopping-bag.png" width="40" height="40" class="mr-2" />
                      </v-col>
                      <v-col md="1" />
                      <v-col md="8">
                        <span>Place your order today</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)"
                  rounded
                  style="border-radius: 30px; border: 1px solid #707070; height: 15vh; display: flex; align-items: center; justify-content: center;">
                  <v-container>
                    <v-row no-gutters>
                      <v-col md="3" align-self="center">
                        <v-img src="@/assets/images/clock.png" width="40" height="40" class="mr-2" />
                      </v-col>
                      <v-col md="1" />
                      <v-col md="8">
                        <span>Wait for your shoes to arrive</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)"
                  rounded
                  style="border-radius: 30px; border: 1px solid #707070; height: 15vh; display: flex; align-items: center; justify-content: center;">
                  <v-container>
                    <v-row no-gutters>
                      <v-col md="3" align-self="center">
                        <v-img src="@/assets/images/scan.png" width="40" height="40" class="mr-2" />
                      </v-col>
                      <v-col md="1" />
                      <v-col md="8">
                        <span>Scan and enter the serial number</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)"
                  rounded
                  style="border-radius: 30px; border: 1px solid #707070; height: 15vh; display: flex; align-items: center; justify-content: center;">
                  <v-container>
                    <v-row no-gutters>
                      <v-col md="3" align-self="center">
                        <v-img src="@/assets/images/nft.png" height="40" width="40" class="mr-2" />
                      </v-col>
                      <v-col md="1" />
                      <v-col md="8">
                        <span>Mint your one-of-a-kind digital artifact</span>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
            </v-row>
          </div>
          <v-row style="padding-top:25px;padding-bottom:20px;">
            <div class="video-container">
              <video width="100%" height="100%" controls>
                <source src="@/assets/videos/PromoVideo.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.vr {
  margin: 0 30px;
  border-right: 2px solid #fff;
  opacity: 0.5;
}

.arrow1 {
  background-image: url('@/assets/images/arrow1.svg');
  background-position: center;
  background-size: contain;
  height: 80%;
}

.arrow2 {
  background-image: url('@/assets/images/arrow2.svg');
  background-position: center;
  background-size: contain;
  height: 80%;
}

.arrow-squiggle {
  background-image: url('@/assets/images/arrows-squiggle.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
}

.info-text {
  font-size: 1rem;
  text-align: left;
  margin-bottom: 30px;
}

.video-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.same-height {
  display: flex;
  flex-grow: 0;
  align-items: left;
  justify-content: left;
  height: 100%;
  text-align: left;
  border-radius: 25px;
}

.v-data-table {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-data-table tr {
  font-size: 1rem;
}

.v-data-table td {
  font-size: 0.9rem;
}

.avantgardegothic-font {
  font-size: 1rem;
  /* Adjust the font size as needed */
}

.flex-container {
  display: flex;
  align-items: center;
}

.custom-footer {
  padding: 16px;
  text-align: center;
  background-color: #333333;
  color: #ffffff;
}

.v-data-table-footer {
  display: none !important;
  /* Hides the footer with pagination controls */
}

.v-data-table th {
  background-color: #333333 !important;
  /* Custom header background color */
  text-align: center !important;
  /* Center align the header text */
  color: #ffffff;
  font-weight: bold;
}

.v-container.full-height {
  height: 80vh;
  display: flex;
  flex-direction: column;
}

.v-row.full-height {
  flex: 1;
  display: flex;
}

.v-card.full-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-container.full-height {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
}
</style>

<script setup lang="ts">

const headers = [
  { title: 'US', value: 'us' },
  { title: 'UK', value: 'uk' },
  { title: 'EU', value: 'eu' },
  { title: 'CM', value: 'cm' },
  { title: 'IN', value: 'in' },
]

const shoeSizes = [
  { "us": 4, "uk": 3.5, "eu": 36, "cm": 23, "in": 9 },
  { "us": 4.5, "uk": 4, "eu": 36.5, "cm": 23.5, "in": 9.25 },
  { "us": 5, "uk": 4.5, "eu": 37.5, "cm": 23.5, "in": 9.375 },
  { "us": 5.5, "uk": 5, "eu": 38, "cm": 24, "in": 9.5 },
  { "us": 6, "uk": 5.5, "eu": 38.5, "cm": 24, "in": 9.75 },
  { "us": 6.5, "uk": 6, "eu": 39, "cm": 24.5, "in": 9.718 },
  { "us": 7, "uk": 6.5, "eu": 40, "cm": 25, "in": 10 },
  { "us": 7.5, "uk": 6.5, "eu": 40.5, "cm": 25.5, "in": 10.125 },
  { "us": 8, "uk": 7, "eu": 41, "cm": 26, "in": 10.25 },
  { "us": 8.5, "uk": 7.5, "eu": 42, "cm": 26.5, "in": 10.5 },
  { "us": 9, "uk": 8, "eu": 42.5, "cm": 27, "in": 10.75 },
  { "us": 9.5, "uk": 8.5, "eu": 43, "cm": 27.5, "in": 10.875 },
  { "us": 10, "uk": 9, "eu": 44, "cm": 28, "in": 11 },
  { "us": 10.5, "uk": 9.5, "eu": 44.5, "cm": 28.5, "in": 11.25 },
  { "us": 11, "uk": 10, "eu": 45, "cm": 29, "in": 11.5 },
  { "us": 11.5, "uk": 10.5, "eu": 45.5, "cm": 29.5, "in": 11.625 },
  { "us": 12, "uk": 11, "eu": 46, "cm": 30, "in": 11.75 },
  { "us": 13, "uk": 12, "eu": 47.5, "cm": 31, "in": 12 }
]
</script>