<script setup>
const props = defineProps(["card"]);
// const getImage = (image) => {
//   return new URL(`@/assets/images/${image}`, import.meta.url).href;
// };
</script>

<template>
  <div class="bg-[#FAFAFA]">
    <!-- Card Blog -->
    <div
      class="max-w-[85rem] bg-[#FAFAFA] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >

    <p class="mt-1 text-5xl mb-20 font-semibold text-slate-800 text-center">
          Our Kitchens
        </p>
      <!-- Title -->
      <div  class="max-w-2xl mx-auto text-center mb-6">
        <p class="mt-1 text-3xl font-semibold text-[#D71F29]">
          {{ card.title }}
        </p>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card -->
       
        <div class="TheCardItself "  v-for="singleCard in card.cards" :key="singleCard.id">
            
      
        <NuxtLink
        class="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition d:hover:bg-white/10 d:focus:bg-white/10"
        :to="`/kitchen/${singleCard.id}`"
          >
          <div  class="aspect-w-16 aspect-h-9 h-80">
            <img
            class="w-full h-full mx-auto object-cover rounded-xl"
            :src="`/assets/images/${singleCard.image}`"
            alt="Layer Image"
            />
          </div>
          <h3
            class="mt-5 text-lg text-center font-bold text-gray-800 d:text-neutral-300 d:hover:text-white"
          >
            {{singleCard.title}}
          </h3>
          <p
            class="mt-3 inline-flex items-center gap-x-1 text-base font-medium text-[#6B6B6B]"
          >
           {{singleCard.snippet}}
          </p>
        </NuxtLink>
        <!-- End Card -->
    </div>
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Card Blog -->
  </div>
</template>
