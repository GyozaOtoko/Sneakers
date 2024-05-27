<template>
    <v-container fluid>
        <v-row>
      <v-row>
        <v-col cols="4">
          <v-card class="rounded-table">
            <v-data-table
              :headers="headers"
              :items="shoeSizes"
              :items-per-page="20" 
              class="elevation-1"
            >
              <template v-slot:top>

              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col >
          <div class="content-container">
            <div class="info-text">
              <p>
                Each pair of sneakers comes with a generative art piece by OTO called Entangled Realms. Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.
              </p>
              <h3>Here’s how it works:</h3>
       
    <v-row >
      <v-col>
        <v-sheet class="pa-2 ma-2 same-height">
            Place your order today
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 same-height"> Wait for your shoes to arrive</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 same-height">Scan and enter the serial number</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2 same-height">Mint your one-of-a-kind digital artifact</v-sheet>
      </v-col>
    </v-row>
            </div>
            <div class="video-container">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/2iQ93L0jV6c"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </v-col>
      </v-row>
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
      fetch('/shoesizes.json')
        .then(response => response.json())
        .then(data => {
          this.shoeSizes = data;
        });
    },
   
  };

  
  </script>
  
  <style >
  .rounded-table {
    border-radius: 15px;
    overflow: hidden;
  }
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info-text {
    text-align: left;
    margin-bottom: 30px;
  }
  .button-row {
    width: 100%;
  }
  .video-container {
    width: 100%;
    display: flex;
    justify-content: center;    
  }
  .info-button {
    white-space: normal; /* Allow text to wrap */
    text-align: center;
    height: 100%; /* Ensure full height for wrapping */
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
    height: 700px;
}
.v-data-table tr {
   font-size: 1rem;       
}

.v-data-table td {
    font-size: 0.7rem;    
}
.v-data-table th {    
  background-color: #333333!important; /* Custom header background color (optional) */
  text-align: center; /* Center align the header text */ 
}


</style>
  