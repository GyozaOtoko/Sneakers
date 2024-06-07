<script setup lang="ts">
// import {useRoute} from "vue-router/auto"
// const route = useRoute("/[...path]")
</script>
<template>
    <div class="w-100 h-100 d-flex justify-center align-center flex-column">
        <h1 style="margin-bottom: 50px">Are you lost?</h1>
        <iframe height="100%" width="100%" src="/404game.html" style="width: 100%; max-width: 1200px; height: 100%; max-height: 350px;"></iframe>
        <!-- <p>{{ route.params.path }}</p> -->
    </div>
</template>