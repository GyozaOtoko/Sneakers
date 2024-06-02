<template>
    <div id="team" style="max-width: 1646px; max-height: 870px; position: relative">
        <v-container class="fill-height justify-center" style=" height: 50vh;">
    <v-row >
      <v-col cols="1">    
        <div style="position: absolute;">
         
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
    text-decoration: none;
    color: inherit; /* Adjust to match your desired link color */
    font-size: 0.8rem; /* Adjust the font size if needed */  
  }

  .v-btn.team-link {    
    text-transform: none;
  }
</style>