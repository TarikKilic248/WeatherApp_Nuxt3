<script setup lang="ts">
const weatherStore = useWeatherStore();
const isExpanded = ref(false);
const isLoading = ref(true);

const formattedDate = computed(() => {
  return new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

const formattedTemperature = computed(() => {
  return weatherStore.weatherData.temperature.toFixed(1);
});

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

onMounted(async () => {
  await weatherStore.retrieveWeatherInformation('Istanbul');
  isLoading.value = false;
});
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="bg-white/90 rounded-2xl shadow-lg h-full flex flex-col">
      <div v-if="isLoading" class="flex-1 flex items-center justify-center">
        <div class="text-gray-600">Loading...</div>
      </div>
      
      <template v-else>
        <!-- Main Card Content -->
        <div class="flex-1 flex flex-col">
          <div
            class="p-8 transition-all duration-300 hover:bg-white/95 flex-1 overflow-y-auto"
          >
            <!-- City and Date -->
            <div class="text-center mb-6">
              <h1 class="text-4xl text-gray-800 mb-2">
                {{ weatherStore.weatherData.city }}
              </h1>
              <p class="text-gray-600">{{ formattedDate }}</p>
            </div>

            <!-- Temperature Section -->
            <div class="my-8 text-center">
              <div class="flex justify-center items-center gap-8">
                <div class="text-center">
                  <span class="block text-sm text-gray-600">Gündüz</span>
                  <span class="text-4xl font-bold text-gray-800"
                    >{{ formattedTemperature }}°C</span
                  >
                </div>
                <div class="text-center">
                  <span class="block text-sm text-gray-600">Gece</span>
                  <span class="text-4xl font-bold text-gray-800"
                    >{{ (weatherStore.weatherData.temperature - 5).toFixed(1) }}°C</span
                  >
                </div>
              </div>
              <div class="mt-4 text-2xl text-gray-600">
                {{ weatherStore.weatherData.condition }}
              </div>
            </div>

            <!-- Weather Details Grid -->
            <div class="grid grid-cols-2 gap-4 p-4 bg-white/50 rounded-xl">
              <div class="flex flex-col items-center gap-2">
                <span class="text-sm text-gray-600">Yağış Oranı</span>
                <span class="text-xl font-bold text-gray-800">30%</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-sm text-gray-600">Nem</span>
                <span class="text-xl font-bold text-gray-800"
                  >{{ weatherStore.weatherData.humidity }}%</span
                >
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-sm text-gray-600">Rüzgar</span>
                <span class="text-xl font-bold text-gray-800"
                  >{{ weatherStore.weatherData.windSpeed }} km/s</span
                >
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-sm text-gray-600">UV İndeksi</span>
                <span class="text-xl font-bold text-gray-800">6</span>
              </div>
            </div>
          </div>

          <!-- Expand Button -->
          <div class="p-4 border-t border-gray-200">
            <button
              @click="toggleExpand"
              class="text-blue-500 hover:text-blue-600 flex items-center justify-center w-full"
            >
              <span>{{ isExpanded ? 'Daha az göster' : 'Daha fazla göster' }}</span>
              <svg
                :class="[
                  'w-5 h-5 ml-1 transform transition-transform',
                  isExpanded ? 'rotate-180' : '',
                ]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Expanded Details -->
        <div
          v-if="isExpanded"
          class="border-t border-gray-200 p-8 bg-gray-50 rounded-b-2xl"
        >
          <div class="grid grid-cols-1 gap-6">
            <!-- Google Maps Location -->
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-3">Konum</h3>
              <div class="aspect-video bg-gray-100 rounded-lg">
                <iframe
                  class="w-full h-full rounded-lg"
                  :src="`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${weatherStore.weatherData.city}`"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <!-- Additional Weather Details -->
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-lg font-semibold mb-3">Detaylı Bilgiler</h3>
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Sis Durumu</span>
                  <span class="font-semibold">Hafif Sisli</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Gün Doğumu</span>
                  <span class="font-semibold">06:32</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Gün Batımı</span>
                  <span class="font-semibold">19:45</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Görüş Mesafesi</span>
                  <span class="font-semibold">10 km</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Basınç</span>
                  <span class="font-semibold">1015 hPa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        <!-- Error Message -->
        <div
          v-if="weatherStore.errorMessage"
          class="p-4 text-red-600 text-center"
        >
          {{ weatherStore.errorMessage }}
        </div>
      </template>
    </div>
  </div>
</template>
=======
      </div>

      <!-- Error Message -->
      <div
        v-if="weatherStore.errorMessage"
        class="p-4 text-red-600 text-center"
      >
        {{ weatherStore.errorMessage }}
      </div>
    </div>
  </div>
</template>
>>>>>>> bc6a15e8a7d9d351254486045a7acbeed5289e00
