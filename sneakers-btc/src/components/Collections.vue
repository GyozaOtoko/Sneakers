<template>
  <div class="stats" style="margin-top: 50px;display: grid;grid-template-columns: auto 1fr;gap: 10px;">
    <div id="info" class="coll-container">
      <div class="coll_title" v-html="collection.name"></div>
      <div class="coll_date">Created <b>{{ collection.created }}</b></div>
      <!-- //TODO: filter and search -->
      <!-- <div class="coll_filter">
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn
              v-bind="activatorProps"
              color="surface-variant"
              text="Filter"
              variant="flat"
            ></v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Traits">
              <v-card-text>
                <template v-for="(item, index) in traitCategories"
                    :key="index"
                    :value="index">
                    <v-select
                      v-model="item.selectedValues"
                      chips
                      clearable
                      :items="item.values"
                      :label="item.traitType"
                      multiple
                    ></v-select>
                </template>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  text="Close"
                  @click="isActive.value = false"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
      <div class="coll_search">search</div> -->
    </div>
    <div style="display: grid;grid-template-columns: repeat(5, auto);gap: 10px;">
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.supply }}</h3>
        <p class="card_subtitle">Supply</p>
      </v-sheet>
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.size }} <span class="card_title-units">{{ collection.size_unit }}</span></h3>
        <p class="card_subtitle">Total file size</p>
      </v-sheet>
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.fee }} <span class="card_title-units">BTC</span></h3>
        <p class="card_subtitle">Total creation fee</p>
      </v-sheet>
      <!-- <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.satributes }}</h3>
        <p class="card_subtitle">Satributes</p>
      </v-sheet> -->
      <v-sheet :elevation="1" color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.range }}</h3>
        <p class="card_subtitle">Range</p>
      </v-sheet>
    </div>
  </div>
  <v-sheet :elevation="1" color="black" rounded style="border-radius: 30px; border: 1px solid #707070; width: 100%; height: 650px; overflow: auto; margin-top: 30px">
    <div style="display: grid; grid-auto-rows: auto; grid-template-columns: repeat(4, 1fr); gap:15px; margin: 30px">
      <template v-for="(item, index) in collectionItems" :key="index">
        <CollectionCard :collectionItem=item :collectionName=props.collection />
      </template>
    </div>
  </v-sheet>
  <div class="w-100 d-flex justify-space-between collection_text" style="margin-top: 50px">
    <p>{{ collection.text[0] }}</p>
    <p>{{ collection.text[1] }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import pioneersData from '@/assets/json/pioneersMetadata.json'
import sneakersData from '@/assets/json/sneakersMetadata.json'

let dialog = false;

const props = defineProps(['collection'])
console.log(props.collection)

const collection = computed(() => {
  if (props.collection == 'pioneers'){
    return {
      name: 'Pioneers',
      created: 'July, 2023',
      supply: 888,
      size: 114.711,
      size_unit: 'Kb',
      fee: 0.0232,
      range: '20,168,976 - 24,736,954',
      text: [`Introducing "Pioneers", an extraordinary NFT collection that breathes life into the digital frontier through a vibrant ensemble of 2D cartoon-style characters. These captivating individuals stand as the embodiment of collaboration, creativity, and innovation, uniting their diverse talents and skills in a quest for progress and excellence.`,`In the whimsical world of "Pioneers", each character is a unique manifestation of creativity and resilience, echoing the spirit of those who dare to forge new paths. With their animated expressions and distinctive personalities, these pioneers are not just characters but storytellers, inviting you to join them on an exhilarating journey of discovery.`]
    }
  }
  else if (props.collection == 'sneakers') {
    return {
      name: `Bitcoin <br/> sneakers`,
      created: 'February, 2023',
      supply: 88,
      size: 3.186,
      size_unit: 'MB',
      fee: 0.0382,
      range: '44,703 - 406,646',
      text: [`"Bitcoin Sneakers" is a groundbreaking NFT collection that seamlessly fuses the worlds of cryptocurrency and fashion, offering enthusiasts a unique and stylish way to express their passion for both. This digital art collection features a series of meticulously designed PNGs showcasing an exclusive lineup of sneakers, each intricately crafted with a nod to the iconic Bitcoin symbol.`, `Immerse yourself in the world of digital couture as "Bitcoin Sneakers" brings together the decentralized beauty of blockchain technology and the timeless appeal of high-end footwear. Each PNG file within the collection captures the essence of luxury sneakers, meticulously detailed with a distinctive Bitcoin twist, creating a visual symphony of style and symbolism.`]
    }
  }
});

const collectionItems = computed(() => {
  if (props.collection == 'pioneers') {
    return pioneersData;
  }
  else if (props.collection == 'sneakers') {
    return sneakersData;
  }
})

let traitCategories: [{
    traitType: string,
    values: [string],
    selectedValues: [string]
}] | any = [];

onMounted(() => {
  //build traitCategories
  pioneersData.forEach(item => {
    item.meta.attributes.forEach((att: {trait_type: string, value: string}) => {
      if(!traitCategories.find(item => item.traitType == att.trait_type)) {
        //initialize the traitCategories array
        traitCategories.push({
          traitType: att.trait_type, 
          values: [att.value],
          selectedValues: []
        })
      }
      else {
        let tempTraitItem = traitCategories.find(item => item.traitType == att.trait_type);
        if (!tempTraitItem.values.includes(att.value)) {
          tempTraitItem.values.push(att.value);
        }
      }
    })
  })
  console.log(JSON.stringify(traitCategories))
})
</script>

<style>
.collection_text {
  font: normal normal normal 16px/20px Helvetica Neue;
  letter-spacing: -0.48px;
  color: #FFFFFF;
  opacity: 0.5
}
</style>