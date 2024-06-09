<script setup lang="ts">
// import {useRoute} from "vue-router/auto"
// const route = useRoute("/[...path]")
</script>
<template>
    <div class="text-center" style="position: relative; text-align: center;margin: 50px auto;max-width: 100%;padding: 0 1rem 1rem;width: 50rem;">
        <h1 style="margin-bottom: 50px">Are you lost?</h1>
        <!-- <iframe height="100%" width="100%" src="/404game.html" style="width: 100%; max-width: 1200px; height: 100%; max-height: 350px;"></iframe> -->
        <div style="display: flex;justify-content: center;">
            <iframe src="/sneakersgame.html" style="aspect-ratio: 1 / 1; border: none; flex: 0 1 75%;"></iframe>
        </div>
        <!-- <p>{{ route.params.path }}</p> -->
    </div>
</template>

<style>
.v-application__wrap {
    overflow: hidden
}
</style>