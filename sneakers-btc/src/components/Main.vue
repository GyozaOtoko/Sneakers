<template>
  <div style="position: absolute; width: 100%; top: 0">
    <img style="position: absolute; left: 0" src="@/assets/images/1x1.svg">
    <img style="position: absolute; left: 0" src="@/assets/images/1x2.svg">
    <img style="position: absolute; right: 0" src="@/assets/images/1x3.svg">
    <img style="position: absolute; right: 0" src="@/assets/images/1x4.svg">
  </div>
  <v-container class="fill-height justify-center" style="flex-wrap: nowrap; flex-direction: column;">
    <HeroSplash />
    <!-- <About /> -->
    <Shop />
    <Team />
    <!-- <ScrollDown /> -->
    <div id="collections" class="section" style="max-width: 1400px;">
      <div style="display: flex;flex-direction: column;align-items: center;position: relative">
        <h2 class="title">Collections</h2>
        <Collection collection="sneakers" />
        <div style="margin: 50px 0"></div>
        <Collection collection="pioneers" />
      </div>
    </div>
    <!-- <ShoeSizes /> -->
  </v-container>
</template>

<script setup lang="ts">
//  
</script>

<style>
@import url(https://db.onlinewebfonts.com/c/65dc1b4fb1cd6bf31e730421533dafc7?family=ITC+Avant+Garde+Gothic+W02+Md);
@import url(https://fonts.cdnfonts.com/css/helvetica-neue-55?styles=15999);

/* .v-application__wrap {
  overflow-x: hidden;
} */
.v-main {
  overflow: hidden;
}

.section {
  margin-top: 150px;
  position: relative;
}

.title {
  font: normal normal bold 30px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  color: #FFFFFF;
}

.squiggle-sm {
  width: 100px;
  margin-bottom: -30px;
}

.v-sheet.card-box {
  border-radius: 20px;
  border: 1px solid #707070;
  padding: 10px 15px;
  text-wrap: nowrap;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
}

.card_title {
  font: normal normal bold 14px Helvetica Neue;
  letter-spacing: -0.32px;
  color: #E87A0A;
  align-items: center;
}

.card_title-units {
  font: normal normal bold 10px Helvetica Neue;
}

.card_subtitle {
  font: normal normal normal 8px Helvetica Neue;
  letter-spacing: -0.32px;
  color: #FFFFFF;
  opacity: 0.5;
}


::-webkit-scrollbar {  
  width: 12px; /* Width of the vertical scrollbar */
  height: 12px; /* Height of the horizontal scrollbar */
}
::-webkit-scrollbar-track {
  background: #151617; 
  border-radius: 10px;
}
/* The scrollbar track (background) */
#collections ::-webkit-scrollbar-track {
  margin-top: 20px;
  margin-bottom: 20px;
}
/* The scrollbar thumb (draggable part) */
::-webkit-scrollbar-thumb {
  background: #E87A0A; 
  border-radius: 15px;
}
/* The scrollbar thumb on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

@media (min-width: 960px) {
  .title {
    font: normal normal bold 40px ITC Avant Garde Gothic W02 Md;
  }

  .squiggle-sm {
    width: auto;
    margin-bottom: -50px;
  }

  .v-sheet.card-box {
    padding: 15px 20px;
  }

  .card_title {
    font: normal normal bold 16px Helvetica Neue;
  }

  .card_title-units {
    font: normal normal bold 12px Helvetica Neue;
  }

  .card_subtitle {
    font: normal normal normal 10px Helvetica Neue;
  }
}

@media (min-width: 1280px) {
  .section {
    margin-top: 400px;
  }
  .title {
    font: normal normal bold 50px/45px ITC Avant Garde Gothic W02 Md;
  }

  .v-sheet.card-box {
    padding: 20px 30px
  }

  .card_title {
    font: normal normal bold 26px/52px Helvetica Neue;
  }

  .card_title-units {
    font: normal normal bold 16px Helvetica Neue;
  }

  .card_subtitle {
    font: normal normal normal 12px Helvetica Neue;
  }
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

.vr {
  margin: 0 30px;
  border-right: 2px solid #fff;
  opacity: 0.5
}

.squiggly-bg {
  background-image: url('@/assets/images/sneakerSquiggle2.png');
  background-position: center;
  background-size: contain;
  height: 100%;
}

.sneaker-shadow {
  top: 760px;
  left: 363px;
  width: 573px;
  height: 29px;
  background: #000000 0% 0% no-repeat padding-box;
  opacity: 0.5;
  filter: blur(5px);
}

.v-app-bar.v-toolbar {
  background-color: rgba(0, 0, 0, 0);
}

.menuHover * {
  color: #E87A0A;
}

.coll_title {
  grid-area: title;
  font: normal normal bold 30px/30px ITC Avant Garde Gothic W02 Md;
  letter-spacing: 2px;
  align-self: center
}

.coll_date {
  grid-area: date;
  font: normal normal normal 16px/17px Helvetica Neue;
  letter-spacing: -0.32px;
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
    'title date'
    'title filter'
    'title search';
  gap: 10px;
}
</style>