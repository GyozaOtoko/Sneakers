<template>
  <div id="sneakers" class="d-lg-flex justify-center section" style="z-index: 1">
    <div class="shop_left">
      <div>
        <div class="title">Blue Genesis: Limited Edition</div>
        <p class="shopText">Introducing our first drop: the Blue Genesis, a limited edition release of just 1500 pairs (250 remaining). Inspired by the origins of Bitcoin and the dawn of digital currency. Each pair comes with a generative art piece by the renowned artist OTO hyperlink to x.com/otograf_jp (as featured in Sotheby’s). Combining high-end fashion with high-end art in a first-of-its-kind project built on Bitcoin.</p>
      </div>
      <div style="display: grid; grid-template-areas:'main right1''main right2''main right3'; gap: 20px; margin-top: 30px">
        <v-sheet style="grid-area: main;" class="shopImg mainShopImg">
          <v-img src="@/assets/images/shopSneakers1.webp" cover class="onImgHover"/>
        </v-sheet>
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet v-bind="props" style="grid-area: right1" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers2.webp" cover class="onImgHover"/>
            <v-overlay :model-value="!isHovering" class="align-center justify-center" scrim="#000000" contained></v-overlay>
          </v-sheet>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet v-bind="props" style="grid-area: right2" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers3.webp" cover class="onImgHover"/>
            <v-overlay :model-value="!isHovering" class="align-center justify-center" scrim="#000000" contained></v-overlay>
          </v-sheet>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-sheet v-bind="props" style="grid-area: right3" class="shopImg rightShopImg">
            <v-img src="@/assets/images/shopSneakers4.webp" cover class="onImgHover"/>
            <v-overlay :model-value="!isHovering" class="align-center justify-center" scrim="#000000" contained></v-overlay>
          </v-sheet>
        </v-hover>
      </div>
    </div>
    <div class="shop_right d-flex flex-column">
      <div style="max-width: max-content;">
        <div id="helioCheckoutContainer" ref="el"></div>
        <v-btn border block class="collection-btn rounded-lg text-none" style="margin-top: 20px" href="https://forms.gle/McmW4PKoPWT9xX7E7" target="_blank">RESERVE YOUR SNEAKERS</v-btn>
        <!-- <v-sheet color="linear-gradient(180deg, #262626 0%, #33333E 100%)" style="border-radius: 30px; border: 1px solid #707070; padding: 20px; margin-top: 20px">
          <p class="shopDisclaimer">
            Disclaimer: This is a DeFi payment that can't be reversed. Funds go directly to the merchant.
          </p>
        </v-sheet> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" scoped>
import { ref, onMounted } from 'vue';

let el = ref(null);

declare global {
    interface Window {
      helioCheckout:any;
    }
}

onMounted(() => {
  let helioCheckoutContainer = el.value;

  window.helioCheckout(
    helioCheckoutContainer,
    {
      paylinkId: "66611b6df244ef362bfc7394",
      platform: "magic_eden",
      theme: {
        themeMode: "dark", // or "light"
        colors: {
          primaryButtonBackground: "#F76C1B",
          primaryButtonText: "#FFFFFF",
        }
      },
      onSuccess: (event: any) => console.log(event),
      onError: (event: any) => console.log(event),
      onPending: (event: any) => console.log(event),
      onCancel: () => console.log("Cancelled payment"),
      onStartPayment: () => console.log("Starting payment"),
    }
  );
})

</script>

<style>
#shop {
  max-width: 1400px; 
  align-items: center; 
  gap: 30px;
}
.shop_left {
  max-width: 900px;
  margin-bottom: 30px
}
.shop_right {
  align-items: center;
  align-self: end;
  margin-bottom: 30px
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
  position: relative
}
.v-overlay {
  cursor: pointer;
}
.mainShopImg {
  padding: 30px;
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
  max-width: max-content;
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
.collection-btn {
  background: #E87A0A !important;
}
.collection-btn:hover {
  background: transparent !important;
  color: #E87A0A;
}

@media (min-width: 960px) {
  #helioCheckoutContainer {
    min-width: 400px;
  }
  .mainShopImg {
    padding: 100px 65px;
  }
  .shop_right {
    min-width: 400px
  }
}
</style>