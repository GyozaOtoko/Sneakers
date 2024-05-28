<template>
    <v-container fluid>
      <v-row class="full-height">
        <v-col cols="4">
          <v-card class="rounded-table full-height">
            <v-data-table
              :headers="headers"
              :items="shoeSizes"
              :items-per-page="20"
              disable-pagination
              hide-default-footer
              class="elevation-1 custom-table"
              
            >
              <template v-slot:top></template>
              <template v-slot:footer>
              <div class="custom-footer">
                Custom footer content goes here
              </div>
            </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="8">
          <div class="content-container full-height">
            <div class="info-text">
              <p>
                Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.
              </p>
              <h4>Here’s how it works:</h4>
              <v-row>
              <v-col>
                <v-sheet class="pa-2 ma-2 same-height custom-font flex-container">
                  <v-img
                    src="@/assets/img1.png"
                    height="20"
                    class="mr-2"
                  ></v-img>
                  <span>Place your order today</span>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="pa-2 ma-2 same-height custom-font flex-container">
                  <v-img
                    src="@/assets/img1.png"
                    height="20"
                    class="mr-2"
                  ></v-img>
                  <span>Wait for your shoes to arrive</span>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="pa-2 ma-2 same-height custom-font flex-container">
                  <v-img
                    src="@/assets/img1.png"
                    height="20"
                    class="mr-2"
                  ></v-img>
                  <span>Scan and enter the serial number</span>
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet class="pa-2 ma-2 same-height custom-font flex-container">
                  <v-img
                    src="@/assets/img1.png"
                    height="30"
                    class="mr-2"
                  ></v-img>
                  <span>Mint your one-of-a-kind digital artifact</span>
                </v-sheet>
              </v-col>
            </v-row>
            </div>
            <div class="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/2iQ93L0jV6c"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        headers: [
        { title: 'US', value: 'us' },
          { title: 'UK', value: 'uk' },
          { title: 'EU', value: 'eu' },
          { title: 'CM', value: 'cm' },
          { title: 'IN', value: 'in' },
        ],
        shoeSizes: []
      };
    },
    mounted() {
      fetch('../src/data/shoesizes.json')
        .then(response => response.json())
        .then(data => {
          this.shoeSizes = data;
        });
    }
  };
  </script>
  
  <style>
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

  .v-data-table th {    
  background-color: #333333!important; /* Custom header background color */
  text-align: center; /* Center align the header text */
  color: #ffffff;
  font-weight: bold;

}
  .custom-footer {
  padding: 16px;
  text-align: center;
  background-color: #333333;
  color: #ffffff;
}
  .v-data-table-footer {
  display: none!important; /* Hides the footer with pagination controls */
}
.custom-table{
    --v-table-row-height: 32px;
}

.custom-font {
  font-size: 0.7rem; /* Adjust the font size as needed */  
}

.flex-container {
  display: flex;
  align-items: center;  
}

.custom-image {
  max-height: 30px;  
}
  </style>
  