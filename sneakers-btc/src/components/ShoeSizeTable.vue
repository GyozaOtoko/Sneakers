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
              class="elevation-1"
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
              <h3>Here’s how it works:</h3>
              <v-row>
                <v-col>
                  <v-sheet class="pa-2 ma-2 same-height custom-font">
                    <v-img
                    src="/img1.png"
                    max-height="30"
                    class="mr-2"
                  ></v-img>
                    Place your order today
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet class="pa-2 ma-2 same-height custom-font">
                    <v-img
                    src="/img1.png"
                    max-height="30"
                    class="mr-2"
                  ></v-img>
                    Wait for your shoes to arrive
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet class="pa-2 ma-2 same-height custom-font">
                    <v-img
                    src="/img1.png"
                    max-height="30"
                    class="mr-2"
                  ></v-img>
                    Scan and enter the serial number
                  </v-sheet>
                </v-col>
                <v-col>
                  <v-sheet class="pa-2 ma-2 same-height custom-font">
                    <v-img
                    src="/img1.png"
                    max-height="30"
                    class="mr-2"
                  ></v-img>
                    Mint your one-of-a-kind digital artifact
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
  }
  .info-text {
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
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
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
    background-color: #333333!important; /* Custom header background color (optional) */
    text-align: center; /* Center align the header text */ 
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
.custom-font {
  font-size: 1rem; /* Adjust the font size as needed */  
}

.indent-content {
  display: flex;
  align-items: center;
  padding-left: 10px; /* Indentation */
}
  </style>
  