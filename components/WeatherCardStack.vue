<script setup lang="ts">
const cards = ref([
  { id: 1, city: 'Istanbul' },
  { id: 2, city: 'Ankara' },
  { id: 3, city: 'Izmir' },
]);

const isModalOpen = ref(false);
const searchQuery = ref('');
const useGeolocation = ref(false);
const currentPosition = ref(null);

const addNewCard = () => {
  isModalOpen.value = true;
};

const getGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentPosition.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // Here you would typically make an API call to get the city name from coordinates
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }
};

const confirmAddCity = () => {
  if (searchQuery.value) {
    cards.value.push({
      id: cards.value.length + 1,
      city: searchQuery.value
    });
    searchQuery.value = '';
    isModalOpen.value = false;
  }
};
</script>

<template>
  <div class="relative h-full">
    <!-- Stacked Cards -->
    <div class="relative">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        class="absolute right-0 top-0 w-[50px] h-[200px] bg-white/90 rounded-lg shadow-md cursor-pointer transform transition-transform hover:translate-x-[-10px]"
        :style="{
          transform: `translateX(${index * 20}px)`,
          zIndex: cards.length - index
        }"
      >
        <div class="h-full flex items-center justify-center writing-mode-vertical">
          <span class="transform rotate-180 text-gray-600">{{ card.city }}</span>
        </div>
      </div>
    </div>

    <!-- Add New Card Button -->
    <button
      @click="addNewCard"
      class="absolute right-0 top-[220px] w-[50px] h-[50px] bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
    >
      <svg
        class="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </button>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 class="text-xl font-bold mb-4">Yeni Şehir Ekle</h2>
        
        <!-- Search Option -->
        <div class="mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Şehir ara..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Geolocation Option -->
        <div class="mb-6">
          <button
            @click="getGeolocation"
            class="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center justify-center"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Konumumu Kullan
          </button>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-2">
          <button
            @click="isModalOpen = false"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            İptal
          </button>
          <button
            @click="confirmAddCity"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.writing-mode-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>