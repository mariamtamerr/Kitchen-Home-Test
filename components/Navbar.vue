<script setup>
import { Disclosure, DisclosureButton } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed, ref } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useReservations } from '~/composables/useProducts'

const reservations = useReservations()

// compute the count
const reservationCount = computed(()=> reservations.value.length)

const navigation = [
  { name: 'Our Kitchens',  },
  { name: 'Reservations', },
]
</script>

<template>
  <Disclosure as="nav" class="bg-gray- border-b-2 border-gray-400" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <NuxtLink to="/">
              <h1 class="text-xl font-bold text-slate-800">Kitchen Home</h1>
            </NuxtLink>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
             
              <NuxtLink
                to='/'
                class="rounded-md px-3 py-2 text-sm font-medium text-slate-800 cursor-pointer hover:bg-gray-700  hover:text-white"
              >
                Our Kitchens
              </NuxtLink>


              <NuxtLink
                to='/reservations'
                class="hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-gray-700 hover:text-white" 
              >
               Reservations ({{ reservationCount }})
              </NuxtLink>

            </div>
          </div>

          <!-- Language dropdown -->
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Lang 
              <!-- {{ currentLocale }} -->
              <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>

            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <MenuItem>
                <a @click.prevent="setEnglish" href="#" class="block px-4 py-2 text-sm text-gray-700">En</a>
              </MenuItem>
              <MenuItem>
                <a @click.prevent="setArabic" href="#" class="block px-4 py-2 text-sm text-gray-700">Ar</a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <!-- End Language dropdown -->

          
        </div>
      </div>
    </div>
  </Disclosure>
</template>
