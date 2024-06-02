<template>
  <v-container class="justify-center d-flex" style="margin-top: 150px; position: relative;">
    <div id="shop" class="d-lg-flex">
      <div class="shop_left">
        <div>
          <div class="title">Bitcoin<br/>Sneakers x OTO</div>
          <p class="shopText">Unleash your individuality with our diverse range of colorways and designs. From sleek monochromes to vibrant patterns, the FutureStride Collection ensures you make a statement with every step. These aren't just sneakers; they're a reflection of your unique personality. These aren't just sneakers; they're a reflection of your unique personality.</p>
        </div>
        <div style="display: grid; grid-template-areas:'main right1''main right2''main right3'; gap: 20px; margin-top: 30px">
          <v-sheet style="grid-area: main;" class="shopImg mainShopImg">
            <v-img src="@/assets/images/shopSneakers1.png" cover class="onImgHover"/>
          </v-sheet>
          <v-sheet style="grid-area: right1" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers2.png" cover class="onImgHover"/>
          </v-sheet>
          <v-sheet style="grid-area: right2" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers3.png" cover class="onImgHover"/>
          </v-sheet>
          <v-sheet style="grid-area: right3" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers4.png" cover class="onImgHover"/>
          </v-sheet>
        </div>
      </div>
      <div class="shop_right d-flex flex-column">
        <div id="helioCheckoutContainer" ref="el"></div>
        <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" style="border-radius: 30px; border: 1px solid #707070; padding: 20px; margin-top: 20px">
          <p class="shopDisclaimer">
            Disclaimer: This is a DeFi payment that can't be reversed. Funds go directly to the merchant. See our terms
          </p>
        </v-sheet>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts" scoped>
import { ref, onMounted } from 'vue';

let el = ref(null);

declare global {
    interface Window {
      helioCheckout:any;
    }
}

let helioLoaded = false;

onMounted(() => {
  let helioCheckoutContainer = el.value;

  window.helioCheckout(
    helioCheckoutContainer,
    {
      paylinkId: "65fcef08a0785d31a66bc63e",
      platform: "magic_eden",
      theme: {
        themeMode: "dark", // or "light"
        colors: {
          primaryButtonBackground: "#F76C1B",
          primaryButtonText: "#FFFFFF",
        }
      },
      onSuccess: event => console.log(event),
      onError: event => console.log(event),
      onPending: event => console.log(event),
      onCancel: () => console.log("Cancelled payment"),
      onStartPayment: () => console.log("Starting payment"),
    }
  );
  helioLoaded = true;
})

</script>

<style>
#shop {
  max-width: 1400px; align-items: center; gap: 70px;
}
.shop_left {
  max-width: 900px;
  margin-bottom: 30px
}
.shop_right {
  max-width: 450px
}
.shopText {
  font: normal normal normal 16px/20px Helvetica Neue;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.5;
  margin-top: 30px
}
.shopDisclaimer {
  font: normal normal normal 16px/20px Helvetica Neue;
  letter-spacing: -0.32px;
}
.v-sheet.shopImg {
  border-radius: 30px; border: 1px solid #707070;
}
.mainShopImg {
  padding: 100px 65px;
  max-width: 600px
}
.rightShopImg {
  padding: 24px 26px;
  max-width: 250px;
}
.shopDisclaimer {
  font: normal normal bold 16px Helvetica Neue;
  letter-spacing: -0.32px;
}
#helioCheckoutContainer {
  width: 450px;
}
#helioCheckoutContainer .hel-bg-white {
  background-color: rgb(33,33,33, 0) !important;
}
#helioCheckoutContainer .helio-embed {
  background: rgb(33,33,33) !important;
  border-radius: 30px !important;
  border: 1px solid #707070;
}
#helioCheckoutContainer .hel-max-w-\[400px\] {
  max-width: 450px !important;
}
.onImgHover {
  transition: transform 0.2s;
  cursor: pointer;
}
.onImgHover:hover{
  transform: scale(1.2);
}
</style>