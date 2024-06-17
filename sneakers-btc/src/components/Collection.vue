<template>
  <div class="stats" style="margin-top: 50px;display: flex;width: 100%;gap: 30px;flex-wrap: wrap;">
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
    <div style="gap: 10px;flex: 1 1 auto;display: flex;flex-wrap: wrap; ">
      <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.supply }}</h3>
        <p class="card_subtitle">Supply</p>
      </v-sheet>
      <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.size }} <span class="card_title-units">{{ collection.size_unit }}</span></h3>
        <p class="card_subtitle">Total file size</p>
      </v-sheet>
      <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.fee }} <span class="card_title-units">BTC</span></h3>
        <p class="card_subtitle">Total creation fee</p>
      </v-sheet>
      <!-- <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.satributes }}</h3>
        <p class="card_subtitle">Satributes</p>
      </v-sheet> -->
      <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" class="card-box">
        <h3 class="card_title">{{ collection.range }}</h3>
        <p class="card_subtitle">Range</p>
      </v-sheet>
    </div>
  </div>
  <div class="w-100 d-flex justify-space-between collection_text" style="margin-top: 30px">
    <p>{{ collection.text[0] }}</p>
  </div>
  <v-sheet color="black" rounded class="collection-sheet">
    <div class="collection-grid">
      <template v-for="(item) in collectionItems" :key="index">
        <CollectionCard :collectionItem=item :collectionName=props.collection />
      </template>
    </div>
    <div class="d-flex justify-center" style="margin-bottom: 30px">
      <v-btn border class="collection-btn rounded-lg text-none" :href="`https://magiceden.io/ordinals/marketplace/${collection.slug}`" target="_blank">VIEW MORE</v-btn>
    </div>
  </v-sheet>
  <!-- <div class="w-100 d-flex justify-space-between collection_text" style="margin-top: 50px; gap: 20px">
    <p>{{ collection.text[0] }}</p>
    <p>{{ collection.text[1] }}</p>
  </div> -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import pioneersData from '@/assets/json/pioneersMetadata.json'
import sneakersData from '@/assets/json/sneakersMetadata.json'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const props = defineProps(['collection'])

const collection = computed(() => {
  if (props.collection == 'pioneers'){
    return {
      name: 'Pioneers',
      slug: 'pioneers',
      created: 'July 2023',
      supply: 888,
      size: 114.711,
      size_unit: 'Kb',
      fee: 0.0232,
      range: '20,168,976 - 24,736,954',
      text: [`Our pioneers are the driving force behind Bitcoin Sneakers. By owning one of our avatars, you're not just getting a piece of digital art; you're becoming part of a community with access to exclusive benefits and rewards.`]
    }
  }
  else if (props.collection == 'sneakers') {
    return {
      name: `Bitcoin <br/> Sneakers`,
      slug: 'bitcoin-sneakers',
      created: 'February 2023',
      supply: 88,
      size: 3.186,
      size_unit: 'MB',
      fee: 0.0382,
      range: '44,703 - 406,646',
      text: [`Our journey began on February 9, 2023, when we inscribed 88 sneakers onto the Bitcoin blockchain, also known as Ordinals. We became the first fashion collection inscribed on Bitcoin. Check out the sneakers below and own your piece of Bitcoin history.`]
    }
  }
  else return {
    name: ``,
    created: '',
    supply: 0,
    size: 0,
    size_unit: '',
    fee: 0,
    range: '',
    text: []
  }
});

const collectionItems = computed(() => {
  if (props.collection == 'pioneers') {
    return smAndDown.value ? pioneersData.slice(0,4) : pioneersData.slice(0,8)
  }
  else if (props.collection == 'sneakers') {
    return smAndDown.value ? sneakersData.slice(0,4) : sneakersData.slice(0,8);
  }
})

// let traitCategories: [{
//     traitType: string,
//     values: [string],
//     selectedValues: [string]
// }] | any = [];

// onMounted(() => {
//   //build traitCategories
//   pioneersData.forEach(item => {
//     item.meta.attributes.forEach((att: {trait_type: string, value: string}) => {
//       if(!traitCategories.find((item: any) => item.traitType == att.trait_type)) {
//         //initialize the traitCategories array
//         traitCategories.push({
//           traitType: att.trait_type, 
//           values: [att.value],
//           selectedValues: []
//         })
//       }
//       else {
//         let tempTraitItem = traitCategories.find((item: any) => item.traitType == att.trait_type);
//         if (!tempTraitItem.values.includes(att.value)) {
//           tempTraitItem.values.push(att.value);
//         }
//       }
//     })
//   })
//   console.log(JSON.stringify(traitCategories))
// })
</script>

<style>
.collection_text {
  font: normal normal normal 16px/20px Helvetica Neue;
  letter-spacing: -0.48px;
  color: #FFFFFF;
  opacity: 0.5
}
.collection-sheet {
  border-radius: 30px; 
  border: 1px solid #707070; 
  width: 100%;
  height: 100%;
  overflow: auto; 
  margin-top: 30px
}
.collection-grid {
  display: grid; 
  grid-auto-rows: auto; 
  gap:15px; 
  margin: 30px;
  grid-template-columns: repeat(2, 1fr);
}
.coll_title {
  grid-area: title;
  font-family: 'ITCAvantGardeGothicLTBold', sans-serif;
  font-size: 30px;
  color: #E87A0A;
}
.coll_date {
  grid-area: date;
  font: normal normal normal 16px/17px Helvetica Neue;
  letter-spacing: -0.32px;
  align-self: end;
  text-align: right;
}

.coll_filter {
  grid-area: filter;
}

.coll_search {
  grid-area: search;
}

.coll-container {
  display: grid;
  grid-template-areas:
    'search search'
    'filter filter'
    'title date';
  gap: 10px;
  align-items: end;
  flex: 1 1 auto;
}
@media (min-width: 960px) {
  .collection-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .coll-container {
    flex: unset;
  }
  .coll_date {
    text-align: unset;
  }
}
</style>