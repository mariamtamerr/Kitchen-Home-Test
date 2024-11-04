<script setup>
import { useRoute } from 'vue-router';
import { useProducts } from '@/composables/useProducts';

const route = useRoute(); 
const products = useProducts(); // Access the global products state
const productId = parseInt(route.params.id); // Get the ID from the route parameters

// Find the product by ID
const product = products.value.find(p => p.id === productId) || null;
</script>

<template>
  <div v-if="product" class="max-w-[85rem] lg:max-w-auto mx-auto">
    <div class="sm:flex px-10 sm:px-4   gap-10  bg-white shadow-md pb-10 rounded-lg overflow-hidden mx-auto mt-10 mb-16">
      <div class="left sm:w-1/2 mx-auto">
        <img :src="`/assets/images/${product.image}`" :alt="product.title" class="w-full h-full object-cover" />
      </div>
      <div class="right mx-auto sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h1 class="text-3xl font-bold mb-4 text-gray-800">{{ product.title }}</h1>
          <p class="text-gray-600 mb-6">{{ product.snippet }}</p>
        </div>
        <h2 class="border-2 mt-5 mb-10"></h2>
        <h2 class="text-lg font-medium mb-2">Key Features</h2>
          <ul class="list-disc list-inside text-gray-600">
            <li v-for="(feature, index) in product.snippet2" :key="index">{{ feature }}</li>
          </ul>
        <div>
          <Modal/>
          <!-- <button class="mt-10 bg-[#D71F29] text-white px-4 py-2 rounded hover:bg-[#b71c24] transition duration-200">
            Make A Reservation
          </button> -->
        </div>
      </div>
    </div>

  <!-- start reviews -->
    <div class=" mx-auto px-4 py-6">
      <h2 class="font-bold mb-10 text-2xl text-slate-800">Customer Reviews</h2>
      <Reviews/>
    </div>
  <!-- end reviews -->
  </div>

  <div v-else>
    
    <p class="text-red-500 text-lg text-center mt-10">Product not found!</p>
  </div>
</template>

<style scoped>
/* Additional styles can be added here */
.left img {
  transition: transform 0.3s ease;
}

.left img:hover {
  transform: scale(1.05);
}
</style>
