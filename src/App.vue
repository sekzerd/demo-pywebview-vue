<script setup lang="ts">

import { ref } from "vue"
// import { usePythonApi } from './hooks/pythonBridge.js'

const content = ref("")
</script>

<template>

    <input class="input input-primary" v-model="content" />
    <button class="btn btn-primary m-2" @click="() => { }">
        open
    </button>
</template>
