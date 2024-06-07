<script setup lang="ts">
import {useRoute} from "vue-router/auto"
const route = useRoute("/claim")
</script>
<template>
    <div class="w-100 h-100 d-flex justify-center align-center">
        <h1 style="margin-bottom: 400px">Check back soon</h1>
        <!-- <p>{{ route.params.path }}</p> -->
    </div>
</template>