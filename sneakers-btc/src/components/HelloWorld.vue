<template>
  <div style="position: absolute; width: 100%; top: 0">
    <img style="z-index:0;position: absolute; left: 0" src="@/assets/images/1x1.svg">
    <img style="z-index:0;position: absolute; left: 0" src="@/assets/images/1x2.svg">
    <img style="z-index:0;position: absolute; right: 0" src="@/assets/images/1x3.svg">
    <img style="z-index:0;position: absolute; right: 0" src="@/assets/images/1x4.svg">
  </div>
  <v-app-bar :elevation="0" color="rgba(0,0,0,0)" style="position: fixed;">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <!-- <v-app-bar-title>Application Bar</v-app-bar-title> -->

    <v-toolbar-items class="hidden-xs-only" >
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
  <v-container class="justify-center"  style="height: 100vh; overflow-y: auto;">
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
        <div style="font-size: 20px;z-index: 2000;">Scroll down</div>
        <div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);opacity: 0.5;width: 17px;height: 17px;transform: rotate(45deg);"></div>
          <div style="border-right: 3px solid rgb(255, 255, 255);border-bottom: 3px solid rgb(255, 255, 255);width: 17px;height: 17px;transform: rotate(45deg); margin-top:-5px"></div>
        </div>
      </div>
    </v-container>
  </v-container>

  <v-container class="justify-center" style="text-align: center; height: 60vh; overflow-y: auto;">
      <v-container :elevation="1" class="justify-center" style="text-align: center;">    
        <v-row justify="right">
          <v-col >
            <div style="position: absolute; width: 80%; z-index: 0">
              <img style="position: absolute; left: 0; width: 40%;  margin-left: 50px;" src="@/assets/images/arch.svg">
            </div>
          </v-col>
          <v-spacer/>
        </v-row>    
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
 
  

  <v-container class="fill-height justify-center" style=" height: 50vh; overflow-y: auto;">
    <v-row no-gutter>
      <v-col cols="2">    
        <div style="position: absolute;">
          <img style="transform: rotate(90deg); position: absolute; z-index: 0;" src="@/assets/images/arch.svg">
        </div>    
      </v-col>
      <v-col cols="10" style="z-index: 1000;">
        <v-container class="justify-center" style="text-align: center;">        
          <v-row justify="center">
            <v-col style="z-index: 1000;">
              <div style="margin-bottom: 20px;">
                <span class="about-title" style="margin-bottom: 0; ">Team</span>
              </div>
            </v-col>
          </v-row>        
        <v-row >
          <v-col cols="1"/>
          <v-col cols="4" style="z-index: 1000">        
            <div class="text" >
              <span >Designed for those who crave both fashion and function, our sneakers are engineered with state-of-the-art materials to provide unparalleled support and durability. Whether you're hitting the streets or chasing your fitness goals, these kicks are your ultimate companion.</span>
            </div>
          </v-col>
          <v-col cols="1"/>
          <v-col cols="4" style="z-index: 1000">
            <div class="text">
              <span>Unleash your individuality with our diverse range of colorways and designs. From sleek monochromes to vibrant patterns, the FutureStride Collection ensures you make a statement with every step. These aren't just sneakers; they're a reflection of your unique personality.</span>
            </div>
          </v-col>
          <v-col cols="1"/>
        </v-row>
        <v-row>
          <v-container :elevation="2" class="justify-center d-flex" style="text-align: center; min-height: 125px; margin-bottom: -75px;">
              <v-row justify="center">
                  <v-col cols="1"></v-col>
                  <v-col style="z-index: 1000">
                    <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 65vh; display: flex; align-items: center; justify-content: center;">
                        <v-container>
                            <v-row >
                                <v-col align-self="center">
                                    <v-img
                                        src="@/assets/images/DayTripper.png"
                                        width="100%"                                                                             
                                    />
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
                              <v-btn text href="www.x.com/daytripperNFT" class="team-link">
                                www.x.com/daytripperNFT
                              </v-btn>
                            </v-row>
                        </v-container>
                    </v-sheet>
                  </v-col>
                  <v-col style="z-index: 1000">
                    <v-sheet  color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 65vh; display: flex; align-items: center; justify-content: center;">
                        <v-container>
                            <v-row>
                                <v-col align-self="center">
                                    <v-img
                                        src="@/assets/images/Gyoza.png"
                                        width="100%"                                      
                                    />
                                </v-col>                              
                            </v-row>
                            <v-row justify="center">
                              <div style="padding-top: 10px; text-align: center;" class="about-text">
                                <span>GYOZA</span>
                              </div>
                            </v-row>
                            <v-row justify="center">                           
                                <span>Developer</span>                           
                            </v-row>
                            <v-row justify="center">                           
                              <v-btn text href="www.x.com/daytripperNFT" class="team-link">
                                www.x.com/daytripperNFT
                              </v-btn>
                            </v-row>
                        </v-container>
                    </v-sheet>
                  </v-col>
                  <v-col style="z-index: 1000">
                    <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 65vh; display: flex; align-items: center; justify-content: center;">
                        <v-container>
                            <v-row >
                                <v-col align-self="center">
                                    <v-img
                                        src="@/assets/images/Vincen.png"
                                        width="100%"                                    
                                    />
                                </v-col>                              
                            </v-row>
                            <v-row justify="center">
                              <div style="padding-top: 20px; text-align: center;" class="about-text">
                                <span>VINCEN</span>
                              </div>
                            </v-row>
                            <v-row justify="center">                           
                                <span>Artist</span>                           
                            </v-row>
                            <v-row justify="center">                           
                              <v-btn text href="www.x.com/daytripperNFT" class="team-link">
                                www.x.com/daytripperNFT
                              </v-btn>
                            </v-row>
                        </v-container>
                    </v-sheet>
                  </v-col>
                  <v-col cols="1"></v-col>
              </v-row>
            </v-container>
          </v-row>
      </v-container>
      </v-col>
  </v-row>
  </v-container>

  <v-container>      
    <v-row class="full-height">
      <v.col cols="4"></v.col>
      <v-col cols="4">
         <v-card class="rounded-table full-height">
            <v-data-table
                :headers="headers"
                :items="shoeSizes"
                :items-per-page="20"
                disable-pagination
                hide-default-footer
                class="elevation-1 custom-table"                
              />
          </v-card>
      </v-col>
          <v-col cols="8">
            <div class="content-container full-height">
              <div class="info-text">
                <p>
                  Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.
                </p>
                <h4>Here’s how it works:</h4>
                <v-container :elevation="2" class="justify-center d-flex" style="text-align: center; min-height: 125px; margin-bottom: -75px;">
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
                  <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 30vh; display: flex; align-items: center; justify-content: center;">
                      <v-container>
                          <v-row no-gutters>
                              <v-col md="3" align-self="center">
                                  <v-img
                                      src="@/assets/images/shopping-bag.png"
                                      width="40"
                                      height="40"
                                      class="mr-2"
                                  />
                              </v-col>
                              <v-col md="1"/>
                              <v-col md="8">
                                  <span>Place your order today</span>
                              </v-col>
                            </v-row>
                        </v-container>
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 30vh; display: flex; align-items: center; justify-content: center;">
                      <v-container>
                          <v-row no-gutters>
                              <v-col md="3" align-self="center">
                                  <v-img
                                      src="@/assets/images/clock.png"
                                      width="40"
                                      height="40"
                                      class="mr-2"
                                  />
                              </v-col>
                              <v-col md="1"/>
                              <v-col md="8">
                                  <span>Wait for your shoes to arrive</span>
                              </v-col>
                          </v-row>
                      </v-container>
                  </v-sheet>
                </v-col>
              <v-col>
                <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 30vh; display: flex; align-items: center; justify-content: center;">
                    <v-container>
                        <v-row no-gutters>                            
                            <v-col md="3" align-self="center">
                                <v-img
                                    src="@/assets/images/scan.png"
                                    width="40"
                                    height="40"
                                    class="mr-2"
                                />
                            </v-col>
                            <v-col md="1"/>
                            <v-col md="8">
                                 <span>Scan and enter the serial number</span>
                             </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet :elevation="1" height="30vh" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" rounded style="border-radius: 30px; border: 1px solid #707070; height: 30vh; display: flex; align-items: center; justify-content: center;">
                    <v-container>
                        <v-row no-gutters>
                            <v-col md="3" align-self="center">
                                <v-img
                                 src="@/assets/images/nft.png"
                                height="40"
                                width="40"
                                class="mr-2"
                                />
                            </v-col>
                            <v-col md="1"/>
                            <v-col md="8">
                                <span>Mint your one-of-a-kind digital artifact</span>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-sheet>
              </v-col>
            </v-row>
              </div>
              <div class="video-container">
                <video width="100%" height="100%" controls>
                  <source src="@/assets/images/Sequence 02.mp4" type="video/mp4">
                      Your browser does not support the video tag.
                </video>
              </div>
          </div>
        </v-col>
      <v-col cols="4"/>
    </v-row>
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

<style>
@import url(https://db.onlinewebfonts.com/c/65dc1b4fb1cd6bf31e730421533dafc7?family=ITC+Avant+Garde+Gothic+W02+Md);
@import url(https://fonts.cdnfonts.com/css/helvetica-neue-55?styles=15999);

                
/* .squiggly-bg {
} */

.title {
  font: normal normal bold 50px/45px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  color: #FFFFFF;
  font-stretch: 1% 150%;
  opacity: 0.6
}
.about-title {
  font: normal normal bold 50px/45px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  color: #FFFFFF;
  font-stretch: 1% 150%;
  opacity: 1;
  z-index: 1000;
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
.about-text {
    text-align: center;
    font: normal normal bold 20px/30px Helvetica Neue;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
  }
.vr {
  margin: 0 30px; 
  border-right: 2px solid #fff; 
  opacity: 0.5;
}
.squiggly-bg {
  background-image: url('@/assets/images/sneakerSquiggle2.png');
  background-position: center;
  background-size: contain;
  height: 100%;
}
.arrow1 {
  background-image: url('@/assets/images/arrow1.svg');
  background-position: center;
  background-size: contain;
  height: 80%;
  z-index: 1000;
}
.arrow2 {
  background-image: url('@/assets/images/arrow2.svg');
  background-position: center;
  background-size: contain;
  height: 80%;
  z-index: 1000;
}
.arrow-squiggle {
  background-image: url('@/assets/images/arrows-squiggle.svg');
  background-position: center;
  background-size: contain;
  height: 100%;
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

.gyoza {
  background-image: url('@/assets/images/gyoza.png');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
}

.daytripper {
  background-image: url('@/assets/images/daytripper.png');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
}

.vincen {
  background-image: url('@/assets/images/vincen.png');
  background-position: center;
  background-size: contain;
  height: 100%;
  z-index: 1000;
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

.video-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    border-radius: 15px;
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

  .custom-table{
    --v-table-row-height: 25px;
}

  .v-data-table th {    
  background-color: #333333!important; /* Custom header background color */
  text-align: center; /* Center align the header text */
  color: #ffffff;
  font-weight: bold;  
}
.v-container.full-height {
    height: 100vh;
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

  .team-link {    
    text-decoration: none;
    color: inherit; /* Adjust to match your desired link color */
    font-size: 0.8rem; /* Adjust the font size if needed */  
  }

  .v-btn.team-link {    
    text-transform: none;
  }
  </style>