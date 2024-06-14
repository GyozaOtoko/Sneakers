<script setup lang="ts">
// import {useRoute} from "vue-router/auto"
// const route = useRoute("/claim")
</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="iframe_wrapper">
                    <iframe src="https://ordinalsbot.com/bitcoin-sneakers" allow-scripts style="aspect-ratio: 1 / 1; border: none; flex: 1 1 auto; max-width: 1010px; max-height: 900px;"></iframe>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.v-application__wrap {
    overflow: hidden
}
.iframe_wrapper {
    display: flex;
    justify-content: center;
    max-height: 900px;
    position: relative;
    text-align: center; 
    margin: 50px 0;
    height: 100%;
}
@media (min-width: 1280px) {
    .iframe_wrapper {
        height: unset;
    }
}
</style>