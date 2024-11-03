<script setup>
import {largeCardSections} from '~/public/assets/database/db.js'

const largeCardInfo = ref(largeCardSections)


</script>


<template>
    <div>     
        <Hero/>
        <Cards v-for="card in largeCardInfo" :key="card.id" :card="card"/>
    </div>
  </template>
  