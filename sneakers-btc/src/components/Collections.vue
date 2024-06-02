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
      range: '20,168,976 - 24,736,954'
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
      range: '44,703 - 406,646' 
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