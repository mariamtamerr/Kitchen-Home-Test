<template>
    <div>
      <!-- Button to open the modal -->
      <button
        type="button"
        class="mt-10 bg-[#D71F29] text-white px-4 py-2 rounded hover:bg-[#850e14] transition duration-200"
        @click="openModal"
      >
        Make A Reservation
      </button>
  
      <!-- Modal -->
      <div
        v-if="isModalOpen"
        class="hs-overlay fixed top-0 left-0 w-full h-full z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-auto"
        role="dialog"
        tabindex="-1"
        aria-labelledby="hs-basic-modal-label"
      >
        <div class="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-basic-modal-label" class="font-bold  mx-auto text-gray-800 dark:text-white">
                Reserve A Date 
              </h3>
              <button
                type="button"
                class="inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                aria-label="Close"
                @click="closeModal"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4  overflow-y-auto text-center">
                <!-- <div class="left"> -->
                    <p class="mt-1 text-gray-800 dark:text-neutral-400">
                        Once you choose a date and confirm your reservation, customer service will contact you shortedly.
                    </p>
                <!-- </div> -->
              <div class="right mt-5 ">
                <Calender/>
              </div>

              <div class="info">
                <Info/>

              </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-300 focus:outline-none focus:bg-gray-50"
                @click="closeModal"
              >
                Close
              </button>
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-slate-800 text-white hover:bg-slate-500 "
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State variable to track if the modal is open
  const isModalOpen = ref(false);
  
  // Function to open the modal
  const openModal = () => {
    isModalOpen.value = true;
  };
  
  // Function to close the modal
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  
  