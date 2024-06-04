<template>
  <v-card class="mx-auto w-100" color="linear-gradient(180deg, #262626 0%, #33333E 100%)">
    <!-- <v-img :src="'https://ordinals.com/content/'+props.collectionItem.id" cover style="padding:15px"></v-img> -->
    <v-lazy :options="{'threshold':0.5}" transition="fade-transition">
      <iframe v-if="props.collectionName == 'pioneers'" :srcdoc="renderHTML" loading="lazy" sandbox="allow-scripts"></iframe>
      <v-img v-if="props.collectionName == 'sneakers'" :src="'https://ordinals.com/content/'+props.collectionItem.id" cover style="margin: 15px;border-radius: 5px;"></v-img>
    </v-lazy>
    <v-card-text>
      <v-row align="center" class="mx-0 d-flex justify-space-between">
        <span>{{ props.collectionItem.meta.name }}</span>
        <div class="text-grey ms-4">
          #{{ props.collectionItem.number }}
        </div>  
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn block border class="collection-btn rounded-lg text-none" :href="`https://magiceden.io/ordinals/item-details/${props.collectionItem.id}`" target="_blank">Buy Now</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">

const props = defineProps(['collectionItem', 'collectionName']);
console.log(props.collectionName)

let renderHTML = await fetch("https://ordinals.com/content/"+props.collectionItem.id)
  .then((response) => response.text())
  .then((text) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="format-detection" content="telephone=no">
    <style>html{background-color:rgb(33,33,33)}body{overflow:hidden}</style>
    ${text.replace(/src="[^"]+"/, 'src="https://bafkreief634yqo2lpzcgabquh465bvtevcxrv6hzeaq5xpjvsulv3bjlp4.ipfs.nftstorage.link/"')}
  </head>
  <body>
  </body>
  </html>
  `
  });
</script>
<style>
iframe {
  aspect-ratio: 1/1;
  border: none;
  width: 100%;
  border-radius: 20px;
  padding: 15px
}

.collection-btn {
  background: #E87A0A;
}
.collection-btn:hover {
  background: transparent;
  color: #E87A0A;
}
</style>